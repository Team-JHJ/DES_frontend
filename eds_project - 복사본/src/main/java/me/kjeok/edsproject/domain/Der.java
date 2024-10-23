package me.kjeok.edsproject.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@NoArgsConstructor (access = AccessLevel.PROTECTED)
@Entity
@Getter
@Table (name = "der_table")
public class Der {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "der_type", nullable = false, length = 50)
    private String derType;

    @Column(name = "generation_capacity", nullable = false)
    private int generationCapacity;

    @Column(name = "installation_date", nullable = false)
    private String installationDate;

    @Column(name = "location", nullable = false, length = 100)
    private String location;

    @Column(name = "storage_capacity", nullable = false)
    private int storageCapacity;

    @Column(name = "der_efficiency", nullable = false, precision = 5, scale = 2)
    private BigDecimal derEfficiency;

    @Column(name = "soc", nullable = false, precision = 5, scale = 2)
    private BigDecimal soc;

    @Column(name = "energy_generation", nullable = false, precision = 5, scale = 2)
    private BigDecimal energyGeneration;

    @Column(name = "grid_connection", nullable = false, length = 20)
    private String gridConnection;

    @Column(name = "home_id", nullable = false)
    private Long homeId;

    @Column(name = "inverter_id", nullable = false)
    private Long inverterId;

}
