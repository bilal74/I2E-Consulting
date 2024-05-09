import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineProductForecastComponent } from './pipeline-product-forecast.component';

describe('PipelineProductForecastComponent', () => {
  let component: PipelineProductForecastComponent;
  let fixture: ComponentFixture<PipelineProductForecastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipelineProductForecastComponent]
    });
    fixture = TestBed.createComponent(PipelineProductForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
