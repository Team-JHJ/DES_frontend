package me.kjeok.edsproject.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Getter
@Table(name = "homeload_table")
public class HomeLoad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    /*@Column(name = "id", updatable = false)
    private Long id;*/

    @Column(name = "load_type", nullable = false)
    private String loadType;

    @Column(name = "power_rating", nullable = false)
    private float powerRating;

    @Column(name = "load_flexibility", nullable = false)
    private String loadFlexibility;

    @Column(name = "operating_hours", nullable = false)
    private String operatingHours;

    @Column(name = "daily_consumption", nullable = false)
    private float dailyConsumption;

    @Column(name = "smart_appliance", nullable = false)
    private String smartAppliance;

    @Column(name = "load_priority", nullable = false)
    private String loadPriority;

    @Column(name = "connected_der", nullable = false)
    private String connectedDer;

    @Column(name = "energy_cost", nullable = false)
    private float energyCost;

    @Column(name = "carbon_footprint", nullable = false)
    private float carbonFootprint;

    @Column(name = "backup_power", nullable = false)
    private String backupPower;

    @Column(name = "power_factor", nullable = false)
    private float powerFactor;

    @Column(name = "load_duration", nullable = false)
    private int loadDuration;

    @Column(name = "home_id", nullable = false)
    private int homeId;
}
