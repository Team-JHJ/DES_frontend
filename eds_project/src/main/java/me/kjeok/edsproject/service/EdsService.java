package me.kjeok.edsproject.service;

import lombok.RequiredArgsConstructor;
import me.kjeok.edsproject.domain.ColumnList;
import me.kjeok.edsproject.domain.Der;
import me.kjeok.edsproject.domain.Resource;
import me.kjeok.edsproject.dto.ApiResponse;
import me.kjeok.edsproject.dto.CategoryResponse;
import me.kjeok.edsproject.dto.MenuResponse;
import me.kjeok.edsproject.repository.DerRepository;
import me.kjeok.edsproject.repository.DerRepositoryCustom;
import me.kjeok.edsproject.repository.ListRepository;
import me.kjeok.edsproject.repository.ResourceRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class EdsService {
    private final DerRepository derRepository;
    private final ResourceRepository resourceRepository;
    private final ListRepository listRepository;

    public List<Resource> findByCategory(String categoryName) {
        return resourceRepository.findByResourceName(categoryName);
    }

    public List<Resource> findByMenu(String resourceName, int id) {
        return resourceRepository.findByResourceName(resourceName);
    }

    public List<ColumnList> findByList(String listName) {
        return listRepository.findByListName(listName);
    }

    public List<Der> findByDerMenu(int home_id, String category) {
        return derRepository.findByHomeIdAndDerType(home_id, category);
    }

    public Object getColumnValue(int homeId, String columnName) {
        return derRepository.findColumnValueByHomeId(homeId, columnName);
    }

//    public ApiResponse getFinalResponse(int homeId, String category) {
//        ApiResponse apiResponse = new ApiResponse.Category();
//
//    }



   /*public List<Der> findByHomeId(long home_id) {
       return derRepository.findByHomeId(home_id);
    }

    // category(DER), list(Solar)와 같은 resource의 이름을 받으면 이름과 description 출력
   public List<ResourceDescription> findByResourceName(String resourceName) {
       return resourceDescriptionRepository.findByResourceName(resourceName);
    }

    public List<ColumnDescription> findByColumnName(String columnName) {
        return columnDescriptionRepository.findByColumnName(columnName);*/
}

