package me.kjeok.edsproject.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Table(name = "smartmeter_table")
public class SmartMeter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "home_id", nullable = false)
    private int homeId;

    @Column(name = "installation_date", nullable = false)
    private Date installationDate;

    @Column(name = "realtime_monitoring", nullable = false)
    private String realtimeMonitoring;

    @Column(name = "transmission_frequency", nullable = false)
    private String transmissionFrequency;

    @Column(name = "energy_exported", nullable = false)
    private float energyExported;

    @Column(name = "energy_imported", nullable = false)
    private float energyImported;

    @Column(name = "current_consumption", nullable = false)
    private float currentConsumption;
}
