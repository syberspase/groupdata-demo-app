import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PatientRecord } from '../model/patient-record';
import { Observable } from 'rxjs';
 
@Injectable()
export class PatientService {
 
  private baseUrl: string;
  private patientListUrl: string;
  private patientGroupsUrl: string;
  private patientAddUrl: string;
 
  constructor(private http: HttpClient) {
    // Use 'http://localhost:8080/' as prefix for local testing with spring boot app.
    this.baseUrl = '';
    this.patientListUrl = this.baseUrl + 'patient_records';
    this.patientGroupsUrl = this.baseUrl + 'patient_groups';
    this.patientAddUrl = this.baseUrl + 'add_patient';
  }
 
  public findAll(): Observable<PatientRecord[]> {
    return this.http.get<PatientRecord[]>(this.patientListUrl);
  }
 
  public findAllInGroups(): Observable<PatientRecord[]> {
    return this.http.get<PatientRecord[]>(this.patientGroupsUrl);
  }
 
  public save(patientRecord: PatientRecord) {
    return this.http.post<PatientRecord>(this.patientAddUrl, patientRecord);
  }
}
