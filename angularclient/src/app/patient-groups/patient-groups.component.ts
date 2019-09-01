import { Component, OnInit } from '@angular/core';
import { PatientRecord } from '../model/patient-record';
import { PatientService } from '../service/patient-service.service';
 
@Component({
  selector: 'app-patient-groups',
  templateUrl: './patient-groups.component.html',
  styleUrls: ['./patient-groups.component.less']
})
export class PatientGroupsComponent implements OnInit {
 
  patientRecords: PatientRecord[];
 
  constructor(private patientService: PatientService) {
  }
 
  ngOnInit() {
    this.patientService.findAllInGroups().subscribe(data => {
      this.patientRecords = data;
    });
  }
}
