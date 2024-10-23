package me.kjeok.edsproject.repository;

import jdk.jfr.Description;
import me.kjeok.edsproject.domain.ColumnList;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DescriptionRepository extends JpaRepository<ColumnList, Long> {
    Optional<ColumnList> findByColumnName(String columnName);
}