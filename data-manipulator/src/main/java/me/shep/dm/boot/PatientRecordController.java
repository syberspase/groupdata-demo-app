package me.shep.dm.boot;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import me.shep.dm.proc.Patient.Key;
import me.shep.dm.proc.PatientComparator;
import me.shep.dm.proc.PatientResultSet;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PatientRecordController {
    private final PatientRecordRepository patientRecordRepository;

    public PatientRecordController(PatientRecordRepository patientRecordRepository) {
        this.patientRecordRepository = patientRecordRepository;
    }
    
    @GetMapping("/patient_records")
    public List<PatientRecord> getPatientRecords() {
        return (List<PatientRecord>) patientRecordRepository.findAll();
    }
    
    @GetMapping("/patient_groups")
    public List<PatientRecord> getPatientGroups() {
        List<PatientRecord> result = (List<PatientRecord>) patientRecordRepository.findAll();
        String[] list = result.stream().map(p -> p.toString()).toArray(size -> new String[size]);
        Key[] groupByKeys = { Key.lastName, Key.firstName };
        Key[] orderByKeys = { Key.id };
        PatientComparator groupBy = new PatientComparator(groupByKeys);
        PatientComparator orderBy = new PatientComparator(orderByKeys);
        PatientResultSet pg = new PatientResultSet(list);
        pg.groupBy(groupBy, orderBy);
        String[] groupedList = pg.toString().split("\n");
        return Arrays.stream(groupedList).map(p -> new PatientRecord(p)).collect(Collectors.toList());
    }
 
    @PostMapping("/add_patient")
    void addPatientRecord(@RequestBody PatientRecord patientRecord) {
        patientRecordRepository.save(patientRecord);
    }

}
