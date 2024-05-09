import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryPrimersComponent } from './industry-primers.component';

describe('IndustryPrimersComponent', () => {
  let component: IndustryPrimersComponent;
  let fixture: ComponentFixture<IndustryPrimersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndustryPrimersComponent]
    });
    fixture = TestBed.createComponent(IndustryPrimersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
