package me.kjeok.edsproject.repository;

public interface ListRepositoryCustom {
    Object findColumnValueByHomeIdAndDerType(int homeId, String columnName, String derType);
    Object findColumnValueByHomeIdAndLoadType(int homeId, String columnName, String loadType);
}
