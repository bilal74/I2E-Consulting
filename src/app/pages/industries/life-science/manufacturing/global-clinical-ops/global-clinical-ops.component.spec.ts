import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalClinicalOpsComponent } from './global-clinical-ops.component';

describe('GlobalClinicalOpsComponent', () => {
  let component: GlobalClinicalOpsComponent;
  let fixture: ComponentFixture<GlobalClinicalOpsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalClinicalOpsComponent]
    });
    fixture = TestBed.createComponent(GlobalClinicalOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
