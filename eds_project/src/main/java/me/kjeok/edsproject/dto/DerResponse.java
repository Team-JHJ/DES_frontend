package me.kjeok.edsproject.dto;

import lombok.Getter;
import me.kjeok.edsproject.domain.Der;
import java.math.BigDecimal;

@Getter
public class DerResponse {
    private int generationCapacity;
    private String installationDate;
    private String location;
    private int storageCapacity;
    private BigDecimal derEfficiency;
    private BigDecimal soc;
    private BigDecimal energyGeneration;
    private String gridConnection;


    public DerResponse(Der der) {
        this.generationCapacity = der.getGenerationCapacity();
        this.installationDate = der.getInstallationDate();
        this.location = der.getLocation();
        this.storageCapacity = der.getStorageCapacity();
        this.derEfficiency = der.getDerEfficiency();
        this.soc = der.getSoc();
        this.energyGeneration = der.getEnergyGeneration();
        this.gridConnection = der.getGridConnection();
    }
}
