package me.kjeok.edsproject.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor (access = AccessLevel.PROTECTED)
@Getter
@Table(name = "resource_description_table")
public class Resource {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, updatable = false)
    private Long id;

    @Column(name = "table_name", nullable = false)
    private String tableName;

    @Column(name = "resource_name", nullable = false)
    private String resourceName;

    @Column(name = "description_resource", nullable = false)
    private String resourceDescription;
}
