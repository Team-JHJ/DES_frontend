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

    @GetMapping("/{home_id}/{category}/finalResponse")

}