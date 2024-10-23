package me.kjeok.edsproject.dto;

import lombok.Builder;
import lombok.Getter;

import java.util.List;
@Builder
@Getter
public class MenuResponse {
    private long id;
    private String menuName;
    private String menuDescription;
    private List<ListItemResponse> list;
}