package me.kjeok.edsproject.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class ListItemResponse {
    private final String listName;
    private final Object listValue;
    private final String listDescription;
}
