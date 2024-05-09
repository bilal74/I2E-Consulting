import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialAnalyticsComponent } from './commercial-analytics.component';

describe('CommercialAnalyticsComponent', () => {
  let component: CommercialAnalyticsComponent;
  let fixture: ComponentFixture<CommercialAnalyticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommercialAnalyticsComponent]
    });
    fixture = TestBed.createComponent(CommercialAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
