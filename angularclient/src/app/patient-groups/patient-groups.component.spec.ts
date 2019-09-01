import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientGroupsComponent } from './patient-groups.component';

describe('PatientGroupsComponent', () => {
  let component: PatientGroupsComponent;
  let fixture: ComponentFixture<PatientGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
