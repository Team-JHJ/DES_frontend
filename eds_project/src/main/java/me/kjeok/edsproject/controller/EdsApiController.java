package me.kjeok.edsproject.controller;

import jdk.jfr.Category;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
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

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@RequiredArgsConstructor
@RestController
public class EdsApiController {
    private final EdsService edsService;

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

    @GetMapping("/{menu}/findByMenu")
    public ResponseEntity<List<MenuResponse>> menu(@PathVariable("menu") String menu) {
        List<MenuResponse> menuResponses = edsService.findByMenu(menu, 2)
                .stream()
                .map(resource -> new MenuResponse(resource, 2))
                .toList();

        return ResponseEntity.ok(menuResponses);
    }



    /*@GetMapping("/{home_id}/{list}/findByColumnName")
    public ResponseEntity<String> findValue(
            @PathVariable("home_id") int homeId,
            @PathVariable("list") String columnName) {

        String columnValue = edsService.getColumnValue(homeId, columnName);

        if (columnValue == null) {
            return ResponseEntity.notFound().build(); // 값이 없을 경우 404 반환
        }

        return ResponseEntity.ok(columnValue);
    }*/

    @GetMapping("/{home_id}/{list}/findByList")
    public ResponseEntity<List<ListResponse>> list(@PathVariable("home_id") int homeId, @PathVariable("list") String list) {

        Object columnValue = edsService.getColumnValue(homeId, list);

        List<ListResponse> listResponses = edsService.findByList(list)
                .stream()
                .map(columnList -> new ListResponse(columnList, 2, columnValue))
                .toList();
        return ResponseEntity.ok(listResponses);
    }

    @GetMapping("/{home_id}/{category}/findByDerMenu")
    public ResponseEntity<List<DerResponse>> der(
            @PathVariable("home_id") int homeId,
            @PathVariable("category") String category) {

        List<DerResponse> derResponses = edsService.findByDerMenu(homeId, category)
                .stream()
                .map(der -> new DerResponse(der, 2))  // 2는 예시값
                .toList();

        return ResponseEntity.ok(derResponses);
    }

}

    /*@PostMapping("/home/{home_id}/{category}/{list}")
    public ResponseEntity<List<ResourceDescriptionResponse>> findAllDer(@PathVariable("home_id") Long home_id, @PathVariable("category") String category, @PathVariable("list") String list) {

        List<DerResponse> der = desService.findByHomeCategory(home_id, category)
                .stream()
                .map(DerResponse::new)
                .toList();

        List<ResourceDescriptionResponse> resourceDescription = desService.findByCategoryName(category)
                .stream()
                .map(ResourceDescriptionResponse::new)
                .toList();

        List<ColumnDescriptionResponse> columnDescription = desService.findByColumnName(list)
                .stream()
                .map(ColumnDescriptionResponse::new)
                .toList();

        return ResponseEntity.ok()
                .body(resourceDescription);
    }*/

//    // 목록 이름 표시, 부연설명하기
//    @PostMapping("home/{home_id}/{category}/{list}")
//    public ResponseEntity<List<DerResponse>> findData(@PathVariable Long home_id,
//                                                                      @PathVariable String category,
//                                                                      @PathVariable String list){
//
//        List<DerResponse> derResponses = desService.findByHomeId(home_id)
//                .stream()
//                .map(DerResponse::new)
//                .toList();
//
//        return ResponseEntity.ok()
//                .body(derResponses);
//    }
//
//    @PostMapping("home/{home_id}/{category}/{list}/test")
//    public ResponseEntity<Map<String, Object>> find(@PathVariable Long home_id,
//                                                      @PathVariable String category,
//                                                      @PathVariable String list){
//
//        List<ResourceDescriptionResponse> resourceDescriptionResponses = desService.findByResourceName(category)
//                .stream()
//                .map(ResourceDescriptionResponse::new)
//                .toList();
//
//        List<DerResponse> derResponses = desService.findByHomeId(home_id)
//                .stream()
//                .map(DerResponse::new)
//                .toList();
//
//
//        Map<String, Object> response = new HashMap<>();
//
//        response.put("response", resourceDescriptionResponses);
//        response.put("ders", derResponses);
//        return ResponseEntity.ok(response);
//    }

//    @PostMapping("home/{home_id}/{category}/findByHomeIdAndList")
//    public ResponseEntity<List<DerResponse>> menu(@PathVariable("home_id") int home_id, @PathVariable("category") String category) {
//        List<DerResponse> derResponses = edsService.findByHomeIdAndList(home_id, category)
//                .stream()
//                .map(DerResponse::new)
//                .toList();
//
//        return ResponseEntity.ok()
//                .body(derResponses);
//    }

//    @PostMapping("home/{home_id}/{category}/findByHomeId")
//    public ResponseEntity<List<DerResponse>> menuss(@PathVariable("home_id") int home_id, @PathVariable("category") String category) {
//        List<Der> derList = edsService.findByHomeId(home_id); // Der 엔티티 리스트를 가져옴
//
//        // 각 Der 엔티티를 DerResponse로 변환하며, 순서 인덱스를 추가
//        List<DerResponse> derResponses = IntStream.range(0, derList.size())
//                .mapToObj(i -> new DerResponse(derList.get(i), i + 1)) // order를 i + 1로 설정
//                .collect(Collectors.toList());
//
//        return ResponseEntity.ok()
//                .body(derResponses);
//    }
//
//
//    // 카테고리별 자원 조회
//    @PostMapping("home/{home_id}/{category}/resourceDescription")
//    public ResponseEntity<List<MenuResponse>> resourceDescription(@PathVariable("home_id") int home_id,
//                                                       @PathVariable("category") String category) {
//        List<MenuResponse> resourceResponses = edsService.resourceResponse(category);
//
//        return ResponseEntity.ok()
//                .body(resourceResponses);
//    }
//
//    @PostMapping("home/{home_id}/{category}/combinedResponse")
//    public ResponseEntity<Map<String, Object>> combinedResponse(@PathVariable("home_id") int home_id, @PathVariable("category") String category) {
//        // 첫 번째 리스트: findByHomeIdAndList
//        List<DerResponse> derResponses = edsService.findByHomeIdAndList(home_id, category)
//                .stream()
//                .map(DerResponse::new)
//                .toList();
//
//        // 두 번째 리스트: findByHomeId
//        List<DerResponse> menuss = edsService.findByHomeId(home_id)
//                .stream()
//                .map(DerResponse::new)
//                .toList();
//
//        // 세 번째 리스트: resourceDescription
//        List<MenuResponse> resourceResponses = edsService.resourceResponse(category);
//
//        // Map에 리스트 추가
//        Map<String, Object> responseMap = new HashMap<>();
//        responseMap.put("derResponses", derResponses);
//        responseMap.put("menuss", menuss);
//        responseMap.put("resourceResponses", resourceResponses);
//
//        return ResponseEntity.ok()
//                .body(responseMap);
//    }

