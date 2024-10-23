package me.kjeok.edsproject.controller;

import lombok.RequiredArgsConstructor;
import me.kjeok.edsproject.domain.Der;
import me.kjeok.edsproject.dto.DerResponse;
import me.kjeok.edsproject.dto.MenuResponse;
import me.kjeok.edsproject.service.EdsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.IntStream;


@RestController
public class EdsApiController {

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

    private final EdsService edsService;

    public EdsApiController(EdsService edsService) {
        this.edsService = edsService;
    }

    @PostMapping("/{home_id}/{category}/findByHomeId")
    public ResponseEntity<List<DerResponse>> findDerByHomeId(@PathVariable("home_id") int homeId,
                                                             @PathVariable("category") String category) {
        List<Der> derList = edsService.findByHomeId(homeId);
        List<DerResponse> derResponses = IntStream.range(0, derList.size())
                .mapToObj(i -> new DerResponse(derList.get(i), i + 1))
                .collect(Collectors.toList());
        return ResponseEntity.ok().body(derResponses);
    }

    @PostMapping("/{home_id}/{category}/resourceDescription")
    public ResponseEntity<List<MenuResponse>> resourceDescription(@PathVariable("home_id") int homeId,
                                                                  @PathVariable("category") String category) {
        List<MenuResponse> resourceResponses = edsService.getCategoryMenu(category, homeId);
        return ResponseEntity.ok().body(resourceResponses);
    }

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
}