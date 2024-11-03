package me.kjeok.edsproject.service;

import lombok.RequiredArgsConstructor;
import me.kjeok.edsproject.domain.ColumnList;
import me.kjeok.edsproject.domain.Der;
import me.kjeok.edsproject.domain.Resource;
import me.kjeok.edsproject.repository.DerRepository;
import me.kjeok.edsproject.repository.ListRepository;
import me.kjeok.edsproject.repository.ResourceRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class EdsService {
    private final DerRepository derRepository;
    private final ResourceRepository resourceRepository;
    private final ListRepository listRepository;

    public List<Resource> findByCategory(String categoryName) {
        return resourceRepository.findByResourceName(categoryName);
    }

    public List<Resource> findByMenu(String resourceName) {
        return resourceRepository.findByResourceName(resourceName);
    }

    public List<Der> findByDerMenu(int home_id, String derType) {
        return derRepository.findByHomeIdAndDerType(home_id, derType);
    }

    public Object getColumnValue(int homeId, String columnName, String derType) {
        return derRepository.findColumnValueByHomeIdAndDerType(homeId, columnName, derType);
    }

    public List<ColumnList> findByList(List<String> fieldNames) {
        List<ColumnList> result = new ArrayList<>();
        for (String fieldName : fieldNames) {
            List<ColumnList> columnLists = listRepository.findByTableNameAndListName("der_table",fieldName);
            result.addAll(columnLists); // 각각의 결과를 결과 리스트에 추가
        }
        return result;
    }

}

