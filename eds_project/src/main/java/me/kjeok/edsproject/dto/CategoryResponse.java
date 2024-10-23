package me.kjeok.edsproject.dto;

import lombok.Builder;
import lombok.Getter;

@Getter

public class CategoryResponse {
    private String categoryName;
    private String categoryDescription;

    @Builder
    public CategoryResponse(String categoryName, String categoryDescription) {
        this.categoryName = categoryName;
        this.categoryDescription = categoryDescription;
    }
}
