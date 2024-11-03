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
import java.util.Arrays;
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


    @GetMapping("/{home_id}/{category}/findByDerMenu")
    public ResponseEntity<List<DerResponse>> der(
            @PathVariable("home_id") int homeId,
            @PathVariable("category") String category) {

        List<DerResponse> derResponses = edsService.findByDerMenu(homeId, category)
                .stream()
                .map(der -> new DerResponse(der))  // 2는 예시값
                .toList();

        return ResponseEntity.ok(derResponses);
    }


    //
    @GetMapping("/{home_id}/{category}/findByList")
    public ResponseEntity<List<ListResponse>> list(@PathVariable("home_id") int homeId, @PathVariable("category") String category) {
        List<String> fieldNames = getDerColumn().getBody();
        List<String> derListDescriptions = derListDescriptions().getBody();

        // 모든 필드에 대한 컬럼 값을 조회
        List<Object> columnValues = fieldNames.stream()
                .map(fieldName -> edsService.getColumnValue(homeId, fieldName)) // 각 필드 이름에 대해 값을 조회
                .collect(Collectors.toList());

        // ListResponse 객체를 생성하여 응답을 구성
        List<ListResponse> listResponses = IntStream.range(0, fieldNames.size())
                .mapToObj(i -> new ListResponse(i + 1, fieldNames.get(i), derListDescriptions.get(i), columnValues.get(i))) // 각 컬럼 값 사용
                .collect(Collectors.toList());

        return ResponseEntity.ok(listResponses);
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
                .map(field -> {
                    Column columnAnnotation = field.getAnnotation(Column.class); // @Column 어노테이션을 가져옴
                    return columnAnnotation != null ? columnAnnotation.name() : field.getName(); // 컬럼 이름 반환
                })
                .collect(Collectors.toList());

        return ResponseEntity.ok(fieldNames);
    }

}