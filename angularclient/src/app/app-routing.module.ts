import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientGroupsComponent } from './patient-groups/patient-groups.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
 
const routes: Routes = [
  { path: 'patient_records', component: PatientListComponent },
  { path: 'patient_groups', component: PatientGroupsComponent },
  { path: 'add_patient', component: PatientFormComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }