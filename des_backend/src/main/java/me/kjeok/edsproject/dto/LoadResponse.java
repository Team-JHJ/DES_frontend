package me.kjeok.edsproject.dto;

import lombok.Builder;
import lombok.Getter;
import me.kjeok.edsproject.domain.HomeLoad;

@Getter
public class LoadResponse {
    private String loadType;
    private float powerRating;
    private String loadFlexibility;
    private String operatingHours;
    private float dailyConsumption;
    private String smartAppliance;
    private String loadPriority;
    private String connectedDer;
    private float energyCost;
    private float carbonFootprint;
    private String backupPower;
    private float powerFactor;
    private int loadDuration;

    @Builder
    public LoadResponse(HomeLoad homeLoad) {
        this.loadType = homeLoad.getLoadType();
        this.powerRating = homeLoad.getPowerRating();
        this.loadFlexibility = homeLoad.getLoadFlexibility();
        this.operatingHours = homeLoad.getOperatingHours();
        this.dailyConsumption = homeLoad.getDailyConsumption();
        this.smartAppliance = homeLoad.getSmartAppliance();
        this.loadPriority = homeLoad.getLoadPriority();
        this.connectedDer = homeLoad.getConnectedDer();
        this.energyCost = homeLoad.getEnergyCost();
        this.carbonFootprint = homeLoad.getCarbonFootprint();
        this.backupPower = homeLoad.getBackupPower();
        this.powerFactor = homeLoad.getPowerFactor();
        this.loadDuration = homeLoad.getLoadDuration();

    }
}
