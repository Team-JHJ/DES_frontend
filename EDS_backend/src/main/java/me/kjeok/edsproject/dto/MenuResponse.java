package me.kjeok.edsproject.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import me.kjeok.edsproject.domain.Resource;

import java.util.List;

@Getter
@NoArgsConstructor
public class MenuResponse {
    private int id;
    private String menuName;
    private String menuDescription;
    private List<ListResponse> list; // ListResponse 추가

    public MenuResponse(int id, String menuName, String menuDescription, List<ListResponse> list) {
        this.id = id;
        this.menuName = menuName;
        this.menuDescription = menuDescription;
        this.list = list; // ListResponse로 초기화
    }
}