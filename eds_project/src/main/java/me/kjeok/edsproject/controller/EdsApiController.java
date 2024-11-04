package me.kjeok.edsproject.controller;

import jakarta.persistence.Column;
import lombok.RequiredArgsConstructor;
import me.kjeok.edsproject.domain.*;
import me.kjeok.edsproject.dto.*;
import me.kjeok.edsproject.service.EdsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@RequiredArgsConstructor
@RestController
public class EdsApiController {
    private final EdsService edsService;


    @GetMapping("/{home_id}/{category}/apiCall")
    public ResponseEntity<Map<String, Object>> list(@PathVariable("home_id") int homeId, @PathVariable("category") String category) {
        List<String> derTypes = Arrays.asList("Solar", "Wind", "EV Battery", "ESS");
        List<String> loadTypes = Arrays.asList("HVAC", "Lighting", "EV Charger", "Refrigerator", "Washing Machine", "Dishwasher");
        List<String> metricsTypes = Arrays.asList("Solar", "Wind", "EV Battery", "ESS");

        List<String> types;
        List<String> fieldNames;

        // 카테고리별로 유형과 필드명을 설정
        switch (category) {
            case "der":
                types = derTypes;
                fieldNames = getDerColumn().getBody();
                break;
            case "homeload":
                types = loadTypes;
                fieldNames = getLoadColumn().getBody();
                break;
            case "metrics":
                types = metricsTypes;
                fieldNames = getmetricsColumn().getBody();
                break;
            default:
                throw new IllegalArgumentException("Invalid category: " + category);
        }

        List<MenuResponse> menuResponses = new ArrayList<>();

        for (String type : types) {
            List<Resource> resources = edsService.findByMenu(type);
            String menuDescription = resources.isEmpty() ? "" : resources.get(0).getResourceDescription();

            List<String> listDescription = listDescriptions(category).getBody();

            // 각 필드에 대한 컬럼 값을 조회
            List<Object> columnValues = new ArrayList<>();
            for (String fieldName : fieldNames) {
                Object value;
                if (category.equals("der")) {
                    value = edsService.getDerColumnValue(homeId, fieldName, type);
                } else if (category.equals("homeload")) {
                    value = edsService.getLoadColumnValue(homeId, fieldName, type);
                } else { // category.equals("metrics")
                    value = edsService.getColumnValueWithoutType(homeId, fieldName, "metrics");
                }
                columnValues.add(value);
            }

            // ListResponse 객체 생성
            List<ListResponse> listResponses = IntStream.range(0, fieldNames.size())
                    .mapToObj(i -> new ListResponse(i + 1, fieldNames.get(i), i < listDescription.size() ? listDescription.get(i) : null, i < columnValues.size() ? columnValues.get(i) : null))
                    .collect(Collectors.toList());

            // MenuResponse 생성
            MenuResponse menuResponse = new MenuResponse(menuResponses.size() + 1, type, menuDescription, listResponses);
            menuResponses.add(menuResponse);
        }

        // 카테고리 정보를 가져오기
        List<CategoryResponse> categoryResponses = edsService.findByCategory(category)
                .stream()
                .map(CategoryResponse::new)
                .collect(Collectors.toList());

        CategoryResponse categoryResponse = categoryResponses.isEmpty() ? null : categoryResponses.get(0);

        // 최종 결과를 Map으로 감싸기
        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("category", categoryResponse);
        responseMap.put("menu", menuResponses);

        return ResponseEntity.ok(responseMap);
    }



    @GetMapping("/{home_id}/emd")
    public ResponseEntity<Map<String, Object>> emdList(@PathVariable("home_id") int homeId) {

        // 필드명 가져오기
        List<String> inverterField = getInverterColumn().getBody();
        List<String> meterField = getMeterColumn().getBody();

        // 메뉴 응답 리스트 초기화
        List<MenuResponse> menuResponses = new ArrayList<>();

        // 인버터 리소스 조회
        List<Resource> inverterResource = edsService.findByMenu("inverter");
        String inverterMenuDescription = inverterResource.isEmpty() ? "" : inverterResource.get(0).getResourceDescription();

        // 인버터 리스트 설명 가져오기
        List<String> inverterListDescription = listDescriptions("inverter").getBody();

        // 각 필드에 대한 인버터 컬럼 값 조회
        List<Object> inverterColumnValues = inverterField.stream()
                .map(field -> edsService.getColumnValueWithoutType(homeId, field, "inverter"))
                .collect(Collectors.toList());

        // 인버터 ListResponse 객체 생성
        List<ListResponse> inverterListResponses = IntStream.range(0, inverterField.size())
                .mapToObj(i -> new ListResponse(i + 1, inverterField.get(i), inverterListDescription.get(i), inverterColumnValues.get(i)))
                .collect(Collectors.toList());

        // 인버터 MenuResponse 생성
        MenuResponse inverterMenuResponse = new MenuResponse(1, "inverter", inverterMenuDescription, inverterListResponses);
        menuResponses.add(inverterMenuResponse);

        // 미터 리소스 조회
        List<Resource> meterResource = edsService.findByMenu("smartmeter");
        String meterMenuDescription = meterResource.isEmpty() ? "" : meterResource.get(0).getResourceDescription();

        // 미터 리스트 설명 가져오기
        List<String> meterListDescription = listDescriptions("smartmeter").getBody();

        // 각 필드에 대한 미터 컬럼 값 조회
        List<Object> meterColumnValues = meterField.stream()
                .map(field -> edsService.getColumnValueWithoutType(homeId, field, "smartmeter"))
                .collect(Collectors.toList());

        // 미터 ListResponse 객체 생성
        List<ListResponse> meterListResponses = IntStream.range(0, meterField.size())
                .mapToObj(i -> new ListResponse(i + 1, meterField.get(i), meterListDescription.get(i), meterColumnValues.get(i)))
                .collect(Collectors.toList());

        // 미터 MenuResponse 생성
        MenuResponse meterMenuResponse = new MenuResponse(2, "smartmeter", meterMenuDescription, meterListResponses);
        menuResponses.add(meterMenuResponse);

        // 카테고리 정보 가져오기
        List<CategoryResponse> categoryResponses = edsService.findByCategory("emd")
                .stream()
                .map(CategoryResponse::new)
                .collect(Collectors.toList());

        // 카테고리 정보가 비어있을 경우 처리
        CategoryResponse categoryResponse = categoryResponses.isEmpty() ? null : categoryResponses.get(0);

        // 최종 결과를 Map으로 감싸기
        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("category", categoryResponse);
        responseMap.put("menu", menuResponses);

        return ResponseEntity.ok(responseMap);
    }

    @GetMapping("/vpp")
    public ResponseEntity<Map<String, Object>> vppList() {

        // 필드명 가져오기
        List<String> vppField = getVppColumn().getBody();

        // 메뉴 응답 리스트 초기화
        List<MenuResponse> menuResponses = new ArrayList<>();

        // 인버터 리소스 조회
        List<Resource> vppResource = edsService.findByMenu("vpp");
        String vppMenuDescription = vppResource.isEmpty() ? "" : vppResource.get(0).getResourceDescription();

        // 인버터 리스트 설명 가져오기
        List<String> vppListDescription = listDescriptions("vpp").getBody();

        // 각 필드에 대한 인버터 컬럼 값 조회
        List<Object> vppColumnValues = vppField.stream()
                .map(field -> edsService.getColumnValue(field, "vpp"))
                .collect(Collectors.toList());

        // 인버터 ListResponse 객체 생성
        List<ListResponse> inverterListResponses = IntStream.range(0, vppField.size())
                .mapToObj(i -> new ListResponse(i + 1, vppField.get(i), vppListDescription.get(i), vppColumnValues.get(i)))
                .collect(Collectors.toList());

        // 인버터 MenuResponse 생성
        MenuResponse inverterMenuResponse = new MenuResponse(1, "vpp", vppMenuDescription, inverterListResponses);
        menuResponses.add(inverterMenuResponse);

        // 카테고리 정보 가져오기
        List<CategoryResponse> categoryResponses = edsService.findByCategory("vpp")
                .stream()
                .map(CategoryResponse::new)
                .collect(Collectors.toList());

        // 카테고리 정보가 비어있을 경우 처리
        CategoryResponse categoryResponse = categoryResponses.isEmpty() ? null : categoryResponses.get(0);

        // 최종 결과를 Map으로 감싸기
        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("category", categoryResponse);
        responseMap.put("menu", menuResponses);

        return ResponseEntity.ok(responseMap);
    }


    /***********************************************************************************/

    @GetMapping("/{home_id}/{loadType}/findByLoadType")
    public ResponseEntity<List<LoadResponse>> load(@PathVariable("home_id") int homeId, @PathVariable("loadType") String loadType) {
        List<LoadResponse> loadResponses = edsService.findByHomeIdAndLoadType(homeId, loadType)
                .stream()
                .map(LoadResponse::new)
                .toList();

        return ResponseEntity.ok(loadResponses);
    }


    @GetMapping("/{category}/findByCategory")
    public ResponseEntity<List<CategoryResponse>> category(@PathVariable("category") String category) {
        // 특정 카테고리 이름으로 리소스를 조회
        List<CategoryResponse> categoryResponses = edsService.findByCategory(category)
                .stream()
                .map(CategoryResponse::new)  // CategoryResponse로 변환
                .toList();

        // List<CategoryResponse>를 응답으로 반환
        return ResponseEntity.ok(categoryResponses);
    }

    @GetMapping("/findByMenu")
    public ResponseEntity<List<MenuResponse>> menu() {
        List<String> derTypes = Arrays.asList("Solar", "Wind", "EV Battery", "ESS");
        List<MenuResponse> menuResponses = new ArrayList<>();

        // AtomicInteger를 사용하여 ID를 관리
        AtomicInteger globalId = new AtomicInteger(1);

        for (String derType : derTypes) {
            List<Resource> resources = edsService.findByMenu(derType);

            //List<MenuResponse> responses = IntStream.range(0, resources.size())
            //        .mapToObj(j -> new MenuResponse(globalId.getAndIncrement(), resources.get(j))) // 순서 ID를 매개변수로 추가
            //        .collect(Collectors.toList());

            //menuResponses.addAll(responses);
        }

        return ResponseEntity.ok(menuResponses);
    }




    //@GetMapping("/{home_id}/{category}/findByDerMenu")
    public ResponseEntity<List<DerResponse>> der(
            @PathVariable("home_id") int homeId,
            @PathVariable("category") String category) {

        List<DerResponse> derResponses = edsService.findByDerMenu(homeId, category)
                .stream()
                .map(der -> new DerResponse(der))
                .toList();

        return ResponseEntity.ok(derResponses);
    }



    // der필드 List
    @GetMapping("/derFields")
    public ResponseEntity<List<String>> getDerColumn() {
        List<String> derFieldNames = Arrays.stream(Der.class.getDeclaredFields())  // Der.class 사용
                .filter(field -> !field.getName().equals("homeId")) // home_id 필드를 제외
                .filter(field -> !field.getName().equals("derType"))

                .map(field -> {
                    Column columnAnnotation = field.getAnnotation(Column.class); // @Column 어노테이션을 가져옴
                    return columnAnnotation != null ? columnAnnotation.name() : field.getName(); // 컬럼 이름 반환
                })
                .collect(Collectors.toList());

        return ResponseEntity.ok(derFieldNames);
    }

    // homeload필드 list
    @GetMapping("/homeloadFieds")
    public ResponseEntity<List<String>> getLoadColumn() {
        List<String> loadFieldNames = Arrays.stream(HomeLoad.class.getDeclaredFields())
                .filter(field -> !field.getName().equals("homeId"))

                .map(field -> {
                    Column columnAnnotation = field.getAnnotation(Column.class); // @Column 어노테이션을 가져옴
                    return columnAnnotation != null ? columnAnnotation.name() : field.getName(); // 컬럼 이름 반환
                })
                .collect(Collectors.toList());

        return ResponseEntity.ok(loadFieldNames);
    }

    @GetMapping("/inverterFields")
    public ResponseEntity<List<String>> getInverterColumn() {
        List<String> inverterFieldNames = Arrays.stream(Inverter.class.getDeclaredFields())
                .filter(field -> !field.getName().equals("homeId"))

                .map(field -> {
                    Column columnAnnotation = field.getAnnotation(Column.class); // @Column 어노테이션을 가져옴
                    return columnAnnotation != null ? columnAnnotation.name() : field.getName(); // 컬럼 이름 반환
                })
                .collect(Collectors.toList());

        return ResponseEntity.ok(inverterFieldNames);
    }

    @GetMapping("/meterFields")
    public ResponseEntity<List<String>> getMeterColumn() {
        List<String> meterFieldNames = Arrays.stream(SmartMeter.class.getDeclaredFields())
                .filter(field -> !field.getName().equals("homeId"))

                .map(field -> {
                    Column columnAnnotation = field.getAnnotation(Column.class); // @Column 어노테이션을 가져옴
                    return columnAnnotation != null ? columnAnnotation.name() : field.getName(); // 컬럼 이름 반환
                })
                .collect(Collectors.toList());

        return ResponseEntity.ok(meterFieldNames);
    }

    @GetMapping("/vppFields")
    public ResponseEntity<List<String>> getVppColumn() {
        List<String> vppFieldNames = Arrays.stream(Vpp.class.getDeclaredFields())
                .filter(field -> !field.getName().equals("homeId"))

                .map(field -> {
                    Column columnAnnotation = field.getAnnotation(Column.class); // @Column 어노테이션을 가져옴
                    return columnAnnotation != null ? columnAnnotation.name() : field.getName(); // 컬럼 이름 반환
                })
                .collect(Collectors.toList());

        return ResponseEntity.ok(vppFieldNames);
    }

    @GetMapping("/metricsFields")
    public ResponseEntity<List<String>> getmetricsColumn() {
        List<String> metricsFieldNames = Arrays.stream(Metrics.class.getDeclaredFields())
                .filter(field -> !field.getName().equals("homeId"))
                .filter(field -> !field.getName().equals("der_type"))
                .map(field -> {
                    Column columnAnnotation = field.getAnnotation(Column.class); // @Column 어노테이션을 가져옴
                    return columnAnnotation != null ? columnAnnotation.name() : field.getName(); // 컬럼 이름 반환
                })
                .collect(Collectors.toList());

        return ResponseEntity.ok(metricsFieldNames);
    }

    @GetMapping("/{category}/listDescriptions")
    public ResponseEntity<List<String>> listDescriptions(@PathVariable("category") String category) {
        // 각 카테고리에 대한 필드명을 가져온다.
        List<String> loadFieldNames = getLoadColumn().getBody();
        List<String> derFieldNames = getDerColumn().getBody();
        List<String> inverterFieldNames = getInverterColumn().getBody();
        List<String> meterFieldNames = getMeterColumn().getBody();
        List<String> vppFieldNames = getVppColumn().getBody();
        List<String> metricsFieldNames = getmetricsColumn().getBody();

        List<String> fieldNames;
        // 카테고리별로 필드명을 설정
        switch (category) {
            case "der":
                fieldNames = derFieldNames; // 'der' 카테고리에 해당하는 필드명 설정
                break;
            case "homeload":
                fieldNames = loadFieldNames; // 'homeload' 카테고리에 해당하는 필드명 설정
                break;
            case "inverter":
                fieldNames = inverterFieldNames; // 'inverter' 카테고리에 해당하는 필드명 설정
                break;
            case "smartmeter":
                fieldNames = meterFieldNames;
                break;
            case "vpp":
                fieldNames = vppFieldNames;
                break;
            case "metrics":
                fieldNames = metricsFieldNames;
                break;
            default:
                throw new IllegalArgumentException("Invalid category"); // 유효하지 않은 카테고리일 경우 예외 발생
        }

        // 카테고리 테이블에 따른 리스트 응답 생성
        List<String> listResponses = edsService.findByList(fieldNames, category + "_table")
                .stream()
                .map(ColumnList::getListDescription) // ColumnList에서 설명을 추출
                .collect(Collectors.toList()); // 리스트로 수집

        return ResponseEntity.ok(listResponses); // 응답으로 리스트 반환
    }

}