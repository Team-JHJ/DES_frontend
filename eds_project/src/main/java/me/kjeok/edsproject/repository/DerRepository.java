package me.kjeok.edsproject.repository;

import me.kjeok.edsproject.domain.Der;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DerRepository extends JpaRepository<Der, Long> {
    List<Der> findByHomeIdAndDerType(int homeId, String derType);
    List<Der> findByHomeId(int homeId);
}
