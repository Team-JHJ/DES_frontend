package me.kjeok.edsproject.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import me.kjeok.edsproject.domain.ColumnList;

@Getter
@NoArgsConstructor
public class ListResponse {

    private int id;
    private String listName;
    private String listDescription;
    private Object listValue;

    // ColumnList를 통한 생성자
    @Builder
    public ListResponse(ColumnList columnList, Object listValue) {
        this.listName = columnList.getListName();
        this.listDescription = columnList.getListDescription();
        this.listValue = listValue;
    }

    // 직접 필드 값을 설정할 수 있는 생성자
    public ListResponse(int id, String listName, String listDescription, Object listValue) {
        this.id = id;
        this.listName = listName;
        this.listDescription = listDescription;
        this.listValue = listValue;
    }

    @Builder
    public ListResponse(ColumnList columnList) {
        this.listDescription = columnList.getListDescription();
    }
}
