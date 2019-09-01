import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../service/patient-service.service';
import { PatientRecord } from '../model/patient-record';
 
@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.less']
})
export class PatientFormComponent {
 
  patientRecord: PatientRecord;
 
  constructor(private route: ActivatedRoute, private router: Router, private patientService: PatientService) {
    this.patientRecord = new PatientRecord();
  }
 
  onSubmit() {
    this.patientService.save(this.patientRecord).subscribe(result => this.gotoPatientList());
  }
 
  gotoPatientList() {
    this.router.navigate(['/patient_records']);
  }
}