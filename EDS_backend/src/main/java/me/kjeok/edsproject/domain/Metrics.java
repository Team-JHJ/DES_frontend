package me.kjeok.edsproject.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "metrics_table")
public class Metrics {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    /*@Column(name = "id", nullable = false)
    private Integer id;*/

    @NotNull
    @Column(name = "total_installation", nullable = false)
    private Float totalInstallation;

    @NotNull
    @Column(name = "om_cost", nullable = false)
    private Float omCost;

    @NotNull
    @Column(name = "payback_period", nullable = false)
    private Integer paybackPeriod;

    @NotNull
    @Column(name = "energy_saving", nullable = false)
    private Float energySaving;

    @NotNull
    @Column(name = "roi", nullable = false)
    private Float roi;

    @NotNull
    @Column(name = "incentive_rebate", nullable = false)
    private Float incentiveRebate;

    @NotNull
    @Column(name = "co2_save", nullable = false)
    private Float co2Save;

    @NotNull
    @Column(name = "grid_carbon_intensity", nullable = false)
    private Float gridCarbonIntensity;

    @NotNull
    @Column(name = "renewable_share", nullable = false)
    private Float renewableShare;

    @NotNull
    @Column(name = "carbon_footprint", nullable = false)
    private Float carbonFootprint;

    @NotNull
    @Column(name = "home_id", nullable = false)
    private Integer homeId;

    /*@Size(max = 50)
    @Column(name = "der_type", length = 50)
    private String derType;*/

    /*public void setDerType(String derType) {
        this.derType = derType;
    }*/

    public void setHomeId(Integer homeId) {
        this.homeId = homeId;
    }

    public void setCarbonFootprint(Float carbonFootprint) {
        this.carbonFootprint = carbonFootprint;
    }

    public void setRenewableShare(Float renewableShare) {
        this.renewableShare = renewableShare;
    }

    public void setGridCarbonIntensity(Float gridCarbonIntensity) {
        this.gridCarbonIntensity = gridCarbonIntensity;
    }

    public void setCo2Save(Float co2Save) {
        this.co2Save = co2Save;
    }

    public void setIncentiveRebate(Float incentiveRebate) {
        this.incentiveRebate = incentiveRebate;
    }

    public void setRoi(Float roi) {
        this.roi = roi;
    }

    public void setEnergySaving(Float energySaving) {
        this.energySaving = energySaving;
    }

    public void setPaybackPeriod(Integer paybackPeriod) {
        this.paybackPeriod = paybackPeriod;
    }

    public void setOmCost(Float omCost) {
        this.omCost = omCost;
    }

    public void setTotalInstallation(Float totalInstallation) {
        this.totalInstallation = totalInstallation;
    }

    /*public void setId(Integer id) {
        this.id = id;
    }*/


}
