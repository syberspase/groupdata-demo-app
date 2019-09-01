package me.shep.dm.boot;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class PatientRecord {
    @Id
    private final String record;
    
    public PatientRecord() {
        this.record = "";
    }
    
    public PatientRecord(String record) {
        this.record = record;
    }
    
    @Override
    public String toString() {
        return record;
    }

    public String getRecord() {
        return record;
    }
}
