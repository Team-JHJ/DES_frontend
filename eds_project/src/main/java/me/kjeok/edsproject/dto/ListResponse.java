package me.kjeok.edsproject.dto;

import lombok.Builder;
import lombok.Getter;
import me.kjeok.edsproject.domain.ColumnList;
import me.kjeok.edsproject.domain.Der;
import me.kjeok.edsproject.repository.DerRepository;


@Getter
public class ListResponse {
    DerRepository derRepository;

    private int id;
    private String listName;
    private String listDescription;
    private String listValue;

    @Builder
    public ListResponse(ColumnList columnList, int id, String listValue) {
        this.id = id;
        this.listName = columnList.getListName();
        this.listDescription = columnList.getListDescription();
        this.listValue = listValue;
    }
}
