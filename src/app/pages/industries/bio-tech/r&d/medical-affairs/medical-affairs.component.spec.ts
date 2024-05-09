import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAffairsComponent } from './medical-affairs.component';

describe('MedicalAffairsComponent', () => {
  let component: MedicalAffairsComponent;
  let fixture: ComponentFixture<MedicalAffairsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalAffairsComponent]
    });
    fixture = TestBed.createComponent(MedicalAffairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
