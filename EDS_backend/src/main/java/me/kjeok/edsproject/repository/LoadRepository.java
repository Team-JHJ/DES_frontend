package me.kjeok.edsproject.repository;

import me.kjeok.edsproject.domain.HomeLoad;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LoadRepository extends JpaRepository<HomeLoad, Long> {
    List<HomeLoad> findByHomeIdAndLoadType(int homeId, String loadType);
}
