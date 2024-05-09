import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessCaseStudiesComponent } from './success-case-studies.component';

describe('SuccessCaseStudiesComponent', () => {
  let component: SuccessCaseStudiesComponent;
  let fixture: ComponentFixture<SuccessCaseStudiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessCaseStudiesComponent]
    });
    fixture = TestBed.createComponent(SuccessCaseStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
