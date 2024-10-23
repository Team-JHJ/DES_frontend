package me.kjeok.edsproject.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Table(name = "column_description_table")
public class ColumnList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "column_name", nullable = false)
    private String columnName;

    @Column(name = "description_content", nullable = false)
    private String description;

    // Getter 메서드
    public Long getId() {
        return id;
    }

    public String getColumnName() {
        return columnName;
    }

    public String getDescription() {
        return description; // 이 메서드는 여전히 필요합니다.
    }}
