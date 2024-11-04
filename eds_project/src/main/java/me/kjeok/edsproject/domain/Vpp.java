package me.kjeok.edsproject.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Table(name = "vpp_table")
public class Vpp {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "aggregated_capacity", nullable = false)
    private int aggregatedCapacity;

    @Column(name = "available_storage", nullable = false)
    private int availableStorage;

    @Column(name = "realtime_grid", nullable = false)
    private String realtimeGrid;

    @Column(name = "frequency_regulation", length = 3)
    private String frequencyRegulation;

    @Size(max = 3)
    @Column(name = "voltage_support", length = 3)
    private String voltageSupport;

    @Size(max = 3)
    @Column(name = "demand_response", length = 3)
    private String demandResponse;

    @Size(max = 3)
    @Column(name = "market_participation", length = 3)
    private String marketParticipation;

    @NotNull
    @Column(name = "market_revenue", nullable = false)
    private Integer marketRevenue;

    @NotNull
    @Column(name = "response_time", nullable = false)
    private Integer responseTime;

    @NotNull
    @Column(name = "battery_efficiency", nullable = false)
    private Integer batteryEfficiency;

    @NotNull
    @Column(name = "forecasted_load", nullable = false)
    private Integer forecastedLoad;

    @NotNull
    @Column(name = "renewable_share", nullable = false)
    private Integer renewableShare;

    @NotNull
    @Column(name = "dispatchable_energy", nullable = false)
    private Integer dispatchableEnergy;

    @NotNull
    @Column(name = "capacity_factor", nullable = false)
    private Integer capacityFactor;

    @NotNull
    @Column(name = "selling_amount", nullable = false)
    private Integer sellingAmount;

    @NotNull
    @Column(name = "selling_price", nullable = false)
    private Float sellingPrice;

}
