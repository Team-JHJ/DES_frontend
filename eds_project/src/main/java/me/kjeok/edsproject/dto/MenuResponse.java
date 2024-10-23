package me.kjeok.edsproject.dto;

import lombok.Builder;
import lombok.Getter;
import me.kjeok.edsproject.domain.Resource;

@Getter
public class MenuResponse {
    private int id;
    private String menuName;
    private String menuDescription;

    @Builder
    public MenuResponse(Resource resource, int id) {
        this.id = id;  // id 필드 설정
        this.menuName = resource.getResourceName();  // resource에서 menuName 가져오기
        this.menuDescription = resource.getResourceDescription();  // resource에서 menuDescription 가져오기
    }
}