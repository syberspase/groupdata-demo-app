package me.shep.dm.boot;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRecordRepository extends CrudRepository<PatientRecord, String> {
}
