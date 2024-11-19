package me.kjeok.edsproject.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor (access = AccessLevel.PROTECTED)
@Entity
@Getter
@Table(name = "inverter_table")
public class Inverter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    /*@Column(name = "id", updatable = false, nullable = false)
    private int id;*/
    @Column(name = "inverter_type", nullable = false)
    private String inverterType;

    @Column(name = "inverter_capacity", nullable = false)
    private int inverterCapacity;

    @Column(name = "inverter_efficiency", nullable = false)
    private int inverterEfficiency;

    @Column(name = "inverter_model", nullable = false)
    private String inverterModel;

    @Column(name = "installation_date", nullable = false)
    private Date installationDate;

    @Column(name = "inverter_status", nullable = false)
    private String inverterStatus;

    @Column(name = "manufacturer", nullable = false)
    private String manufacturer;

    @Column(name = "warranty", nullable = false)
    private int warranty;

    @Column(name = "monitoring_capability", nullable = false)
    private String monitoringCapability;

    @Column(name = "mppt_count", nullable = false)
    private int mpptCount;

    @Column(name = "phase_type", nullable = false)
    private String phaseType;

    @Column(name = "grid_tie", nullable = false)
    private String gridTie;

    @Column(name = "home_id", nullable = false)
    private int homeId;
}
