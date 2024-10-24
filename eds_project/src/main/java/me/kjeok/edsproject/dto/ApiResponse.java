package me.kjeok.edsproject.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ApiResponse {
    private Category category;
    private List<Menu> menu;

    @Getter
    @Setter
    public static class Category {
        private String categoryName;
        private String categoryDescription;
    }

    @Getter
    @Setter
    public static class Menu {
        private int id;
        private String menuName;
        private String menuDescription;
        private List<ListItem> list;

        @Getter
        @Setter
        public static class ListItem {
            private int id;
            private String menuName;
            private String menuDescription;
            private Object listValue;
        }
    }
}
