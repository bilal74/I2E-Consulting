import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalDataManagementComponent } from './clinical-data-management.component';

describe('ClinicalDataManagementComponent', () => {
  let component: ClinicalDataManagementComponent;
  let fixture: ComponentFixture<ClinicalDataManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClinicalDataManagementComponent]
    });
    fixture = TestBed.createComponent(ClinicalDataManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
