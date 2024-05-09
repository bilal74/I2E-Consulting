import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioAnalyticsComponent } from './portfolio-analytics.component';

describe('PortfolioAnalyticsComponent', () => {
  let component: PortfolioAnalyticsComponent;
  let fixture: ComponentFixture<PortfolioAnalyticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioAnalyticsComponent]
    });
    fixture = TestBed.createComponent(PortfolioAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
