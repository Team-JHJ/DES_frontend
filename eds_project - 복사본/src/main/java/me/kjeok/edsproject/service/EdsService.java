package me.kjeok.edsproject.service;

import jdk.jfr.Description;
import lombok.RequiredArgsConstructor;
import me.kjeok.edsproject.domain.ColumnList;
import me.kjeok.edsproject.domain.Der;
import me.kjeok.edsproject.domain.Resource;
import me.kjeok.edsproject.dto.ListItemResponse;
import me.kjeok.edsproject.dto.MenuResponse;
import me.kjeok.edsproject.repository.DerRepository;
import me.kjeok.edsproject.repository.DescriptionRepository;
import me.kjeok.edsproject.repository.ResourceRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import org.springframework.stereotype.Service;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
@Service
public class EdsService {
    private final DerRepository derRepository;
    private final ResourceRepository resourceRepository;
    private final DescriptionRepository columnListRepository; // 변경된 부분

    public EdsService(DerRepository derRepository, ResourceRepository resourceRepository, DescriptionRepository columnListRepository) {
        this.derRepository = derRepository;
        this.resourceRepository = resourceRepository;
        this.columnListRepository = columnListRepository; // 변경된 부분
    }

    public List<Der> findByHomeId(int homeId) {
        return derRepository.findByHomeId(homeId);
    }

    public List<MenuResponse> getCategoryMenu(String category, int homeId) {
        List<?> entities = findEntitiesByCategory(category, homeId);
        return entities.stream()
                .map(entity -> createMenuResponse(entity))
                .collect(Collectors.toList());
    }

    private List<?> findEntitiesByCategory(String category, int homeId) {
        if (category.equalsIgnoreCase("der")) {
            return derRepository.findByHomeId(homeId);
        }
        throw new IllegalArgumentException("Unsupported category: " + category);
    }

    private MenuResponse createMenuResponse(Object entity) {
        List<ListItemResponse> listItems = extractFields(entity);
        return MenuResponse.builder()
                .id(1)
                .menuName(entity.getClass().getSimpleName())
                .menuDescription("Details of " + entity.getClass().getSimpleName())
                .list(listItems)
                .build();
    }

    private List<ListItemResponse> extractFields(Object entity) {
        List<ListItemResponse> listItems = new ArrayList<>();
        Field[] fields = entity.getClass().getDeclaredFields();

        for (Field field : fields) {
            field.setAccessible(true);
            try {
                Object value = field.get(entity);
                String fieldName = field.getName();

                // 컬럼명에 해당하는 설명을 DB에서 조회
                Optional<ColumnList> columnListOpt = columnListRepository.findByColumnName(fieldName);
                String description = columnListOpt.map(ColumnList::getDescription).orElse("No description available.");

                listItems.add(ListItemResponse.builder()
                        .listName(fieldName)
                        .listValue(value)
                        .listDescription(description)
                        .build());
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            }
        }
        return listItems;
    }
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

