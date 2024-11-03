package me.kjeok.edsproject.repository;

import me.kjeok.edsproject.domain.ColumnList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ListRepository extends JpaRepository<ColumnList, Long>, ListRepositoryCustom {
    List<ColumnList> findByTableNameAndListName(String tableName,String list);

}
