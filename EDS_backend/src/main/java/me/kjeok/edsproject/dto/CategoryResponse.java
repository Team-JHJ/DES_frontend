package me.kjeok.edsproject.dto;

import lombok.Builder;
import lombok.Getter;
import me.kjeok.edsproject.domain.Resource;

@Getter
public class CategoryResponse {
    private String categoryName;
    private String categoryDescription;

    @Builder
    public CategoryResponse(Resource resource) {
        this.categoryName = resource.getResourceName();
        this.categoryDescription = resource.getResourceDescription();
    }
}
