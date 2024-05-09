import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchReadinessComponent } from './launch-readiness.component';

describe('LaunchReadinessComponent', () => {
  let component: LaunchReadinessComponent;
  let fixture: ComponentFixture<LaunchReadinessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaunchReadinessComponent]
    });
    fixture = TestBed.createComponent(LaunchReadinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
