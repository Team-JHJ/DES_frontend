package me.kjeok.edsproject.dto;

import lombok.Builder;
import lombok.Getter;
import me.kjeok.edsproject.domain.Resource;

@Getter
public class CategoryResponse {
    private String resourceName;
    private String resourceDescription;

    @Builder
    public CategoryResponse(Resource resource) {
        this.resourceName = resource.getResourceName();
        this.resourceDescription = resource.getResourceDescription();
    }
}
