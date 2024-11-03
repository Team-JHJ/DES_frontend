package me.kjeok.edsproject.repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class DerRepositoryImpl implements DerRepositoryCustom {

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



}
