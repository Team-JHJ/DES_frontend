package me.kjeok.edsproject.controller;

import jakarta.persistence.Column;
import jdk.jfr.Category;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import me.kjeok.edsproject.domain.ColumnList;
import me.kjeok.edsproject.domain.Der;
import me.kjeok.edsproject.domain.Resource;
import me.kjeok.edsproject.dto.CategoryResponse;
import me.kjeok.edsproject.dto.DerResponse;
import me.kjeok.edsproject.dto.ListResponse;
import me.kjeok.edsproject.dto.MenuResponse;
import me.kjeok.edsproject.repository.ResourceRepository;
import me.kjeok.edsproject.service.EdsService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.resource.ResourceResolver;

import java.lang.reflect.Field;
import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@RequiredArgsConstructor
@RestController
public class EdsApiController {
    private final EdsService edsService;

    //DER API
    @GetMapping("/{home_id}/{category}/findByList")
    public ResponseEntity<Map<String, Object>> list(@PathVariable("home_id") int homeId, @PathVariable("category") String category) {
        List<String> derTypes = Arrays.asList("Solar", "Wind", "EV Battery", "ESS");
        List<MenuResponse> menuResponses = new ArrayList<>();

        for (String derType : derTypes) {
            List<Resource> resources = edsService.findByMenu(derType);
            String menuDescription = resources.isEmpty() ? "" : resources.get(0).getResourceDescription(); // 첫 번째 리소스의 설명 사용

            List<String> fieldNames = getDerColumn().getBody();
            List<String> derListDescriptions = derListDescriptions().getBody();

            // 각 필드에 대한 컬럼 값을 조회
            List<Object> columnValues = fieldNames.stream()
                    .map(fieldName -> edsService.getColumnValue(homeId, fieldName, derType))
                    .collect(Collectors.toList());

            // ListResponse 객체 생성
            List<ListResponse> listResponses = IntStream.range(0, fieldNames.size())
                    .mapToObj(i -> new ListResponse(i + 1, fieldNames.get(i), derListDescriptions.get(i), columnValues.get(i)))
                    .collect(Collectors.toList());

            // MenuResponse 생성
            MenuResponse menuResponse = new MenuResponse(menuResponses.size() + 1, derType, menuDescription, listResponses);
            menuResponses.add(menuResponse);
        }

        // 카테고리 정보를 가져오기
        List<CategoryResponse> categoryResponses = edsService.findByCategory(category)
                .stream()
                .map(CategoryResponse::new)  // CategoryResponse로 변환
                .toList();

        // 카테고리 정보가 비어있을 경우 처리
        CategoryResponse categoryResponse = categoryResponses.isEmpty() ? null : categoryResponses.get(0);

        // 최종 결과를 Map으로 감싸기
        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("category", categoryResponse);
        responseMap.put("menu", menuResponses);

        return ResponseEntity.ok(responseMap);
    }




    /***********************************************************************************/



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




    @GetMapping("/{home_id}/{category}/findByDerMenu")
    public ResponseEntity<List<DerResponse>> der(
            @PathVariable("home_id") int homeId,
            @PathVariable("category") String category) {

        List<DerResponse> derResponses = edsService.findByDerMenu(homeId, category)
                .stream()
                .map(der -> new DerResponse(der))
                .toList();

        return ResponseEntity.ok(derResponses);
    }

    // der list description List
    @GetMapping("/derListDescriptions")
    public ResponseEntity<List<String>> derListDescriptions() {
        List<String> fieldNames = getDerColumn().getBody();

        List<String> listResponses = edsService.findByList(fieldNames)
                .stream()
                .map(ColumnList::getListDescription) // ListResponse 생성
                .collect(Collectors.toList()); // toList()를 스트림 끝에 호출

        return ResponseEntity.ok(listResponses);
    }

    // der필드 List
    @GetMapping("/derFields")
    public ResponseEntity<List<String>> getDerColumn() {
        List<String> fieldNames = Arrays.stream(Der.class.getDeclaredFields())  // Der.class 사용
                .filter(field -> !field.getName().equals("homeId")) // home_id 필드를 제외
                //.filter(field -> !field.getName().equals("derType"))

                .map(field -> {
                    Column columnAnnotation = field.getAnnotation(Column.class); // @Column 어노테이션을 가져옴
                    return columnAnnotation != null ? columnAnnotation.name() : field.getName(); // 컬럼 이름 반환
                })
                .collect(Collectors.toList());

        return ResponseEntity.ok(fieldNames);
    }


}