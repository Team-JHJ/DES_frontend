package me.kjeok.edsproject.repository;

import me.kjeok.edsproject.domain.Resource;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ResourceRepository extends JpaRepository<Resource, Long> {
    List<Resource> findByResourceName(String resourceName);}