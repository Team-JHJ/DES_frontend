package me.kjeok.edsproject.service;

import lombok.RequiredArgsConstructor;
import me.kjeok.edsproject.domain.Der;
import me.kjeok.edsproject.domain.Resource;
import me.kjeok.edsproject.dto.MenuResponse;
import me.kjeok.edsproject.repository.DerRepository;
import me.kjeok.edsproject.repository.ResourceRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class EdsService {
    private final DerRepository derRepository;
    private final ResourceRepository resourceRepository;


    public List<Der> findByHomeIdAndList(int home_id, String derType) {

        return derRepository.findByHomeIdAndDerType(home_id, derType);
    }

    public List<Der> findByHomeId(int home_id) {

        return derRepository.findByHomeId(home_id);
    }

    public List<MenuResponse> resourceResponse(String category) {
        List<Resource> resources = resourceRepository.findByResourceName(category); // 카테고리에 따른 자원 조회

        return resources.stream()
                .map(resource -> MenuResponse.builder()
                        .menuName(resource.getResourceName())
                        .menuDescription(resource.getResourceDescription())
                        .build())
                .toList();
    }


//
//    public List<Der> findByHomeId(long home_id) {
//        return derRepository.findByHomeId(home_id);
//    }
//
//    // category(DER), list(Solar)와 같은 resource의 이름을 받으면 이름과 description 출력
//    public List<ResourceDescription> findByResourceName(String resourceName) {
//        return resourceDescriptionRepository.findByResourceName(resourceName);
//    }
//
//    public List<ColumnDescription> findByColumnName(String columnName) {
//        return columnDescriptionRepository.findByColumnName(columnName);
//    }
}
