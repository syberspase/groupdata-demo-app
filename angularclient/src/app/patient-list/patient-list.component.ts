import { Component, OnInit } from '@angular/core';
import { PatientRecord } from '../model/patient-record';
import { PatientService } from '../service/patient-service.service';
 
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.less']
})
export class PatientListComponent implements OnInit {
 
  patientRecords: PatientRecord[];
 
  constructor(private patientService: PatientService) {
  }
 
  ngOnInit() {
    this.patientService.findAll().subscribe(data => {
      this.patientRecords = data;
    });
  }
}
