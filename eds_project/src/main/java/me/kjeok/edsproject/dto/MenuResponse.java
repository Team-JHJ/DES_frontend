package me.kjeok.edsproject.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
public class MenuResponse {
    private long id;
    private String menuName;
    private String menuDescription;

    @Builder
    public MenuResponse(String menuName, String menuDescription) {
        this.menuName = menuName;
        this.menuDescription = menuDescription;
    }
}