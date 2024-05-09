import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEngineeringComponent } from './data-engineering.component';

describe('DataEngineeringComponent', () => {
  let component: DataEngineeringComponent;
  let fixture: ComponentFixture<DataEngineeringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataEngineeringComponent]
    });
    fixture = TestBed.createComponent(DataEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
