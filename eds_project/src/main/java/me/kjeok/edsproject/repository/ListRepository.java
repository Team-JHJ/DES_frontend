package me.kjeok.edsproject.repository;

import me.kjeok.edsproject.domain.ColumnList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ListRepository extends JpaRepository<ColumnList, Long> {
    List<ColumnList> findByListName(String list);
    
}
