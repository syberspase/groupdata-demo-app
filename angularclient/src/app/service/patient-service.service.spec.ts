import { TestBed, inject } from '@angular/core/testing';

import { PatientService } from './patient-service.service';

describe('PatientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientService = TestBed.get(PatientService);
    expect(service).toBeTruthy();
  });
});
