package me.kjeok.edsproject.repository;

import me.kjeok.edsproject.domain.Inverter;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InverterRepository extends JpaRepository<Inverter, Long> {
    List<Inverter> findByHomeId(int homeId);
}