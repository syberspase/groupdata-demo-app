package me.shep.dm.boot;

import java.util.stream.Stream;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DataManipulatorApplication {

	public static void main(String[] args) {
		SpringApplication.run(DataManipulatorApplication.class, args);
	}
 
    @Bean
    CommandLineRunner init(PatientRecordRepository patientRecordRepository) {
        return args -> {
            Stream.of("PID1,POND^AMY,F,19890224", 
                      "PID2,WILLIAMS^RORY,M,19881102", 
                      "PID3,POND^AMY,F,19890224", 
                      "PID4,POND^AMY,F,20010911").forEach(record -> {
                PatientRecord patientRecord = new PatientRecord(record);
                patientRecordRepository.save(patientRecord);
            });
            patientRecordRepository.findAll().forEach(System.out::println);
        };
    }

}
