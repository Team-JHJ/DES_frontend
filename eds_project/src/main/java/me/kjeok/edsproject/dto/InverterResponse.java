package me.kjeok.edsproject.dto;

import lombok.Getter;
import me.kjeok.edsproject.domain.Inverter;

import java.util.Date;

@Getter
public class InverterResponse {
    private String inverterType;
    private int inverterCapacity;
    private int inverterEfficiency;
    private String inverterModel;
    private Date installationDate;
    private String inverterStatus;
    private String manufacturer;
    private int warranty;
    private String monitoringCapability;
    private int mpptCount;
    private String phaseType;
    private String gridTie;

    public InverterResponse(Inverter inverter) {
        this.inverterType = inverter.getInverterType();
        this.inverterCapacity = inverter.getInverterCapacity();
        this.inverterEfficiency = inverter.getInverterEfficiency();
        this.inverterModel = inverter.getInverterModel();
        this.installationDate = inverter.getInstallationDate();
        this.inverterStatus = inverter.getInverterStatus();
        this.manufacturer = inverter.getManufacturer();
        this.warranty = inverter.getWarranty();
        this.monitoringCapability = inverter.getMonitoringCapability();
        this.mpptCount = inverter.getMpptCount();
        this.phaseType = inverter.getPhaseType();
        this.gridTie = inverter.getGridTie();
    }
}
