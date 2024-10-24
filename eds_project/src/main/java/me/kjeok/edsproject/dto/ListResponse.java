package me.kjeok.edsproject.dto;

import lombok.Builder;
import lombok.Getter;
import me.kjeok.edsproject.domain.ColumnList;



@Getter
public class ListResponse {

    private int id;
    private String listName;
    private String listDescription;
    private Object listValue;

    @Builder
    public ListResponse(ColumnList columnList, int id, Object listValue) {
        this.id = id;
        this.listName = columnList.getListName();
        this.listDescription = columnList.getListDescription();
        this.listValue = listValue;
    }
}
