package me.kjeok.edsproject.repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

import java.util.List;

public class ListRepositoryImpl implements ListRepositoryCustom {
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Object findColumnValueByHomeIdAndDerType(int homeId, String columnName, String derType) {
        String sql = "SELECT " + columnName + " FROM der_table WHERE home_id = :homeId AND der_type = :derType";
        List<Object> results = entityManager.createNativeQuery(sql)
                .setParameter("homeId", homeId)
                .setParameter("derType", derType) // derType 파라미터 추가
                .getResultList();
        return results.isEmpty() ? null : results.get(0); // 결과가 없을 경우 null 반환
    }

    @Override
    public Object findColumnValueByHomeIdAndLoadType(int homeId, String columnName, String loadType) {
        String sql = "SELECT " + columnName + " FROM homeload_table WHERE home_id = :homeId AND load_type = :loadType";
        List<Object> results = entityManager.createNativeQuery(sql)
                .setParameter("homeId", homeId)
                .setParameter("loadType", loadType) // derType 파라미터 추가
                .getResultList();
        return results.isEmpty() ? null : results.get(0); // 결과가 없을 경우 null 반환
    }

    @Override
    public Object findColumnValueByHomeId(int homeId, String columnName, String tableName) {
        String sql = "SELECT " + columnName + " FROM " + tableName + "_table WHERE home_id = :homeId";
        List<Object> results = entityManager.createNativeQuery(sql)
                .setParameter("homeId", homeId)
                .getResultList();
        return results.isEmpty() ? null : results.get(0); // 결과가 없을 경우 null 반환
    }

    @Override
    public Object findColumnValue(String columnName, String tableName) {
        String sql = "SELECT " + columnName + " FROM " + tableName + "_table";
        List<Object> results = entityManager.createNativeQuery(sql)
                .getResultList();
        return results.isEmpty() ? null : results.get(0); // 결과가 없을 경우 null 반환
    }


}
