import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingDigitalServicesComponent } from './marketing-digital-services.component';

describe('MarketingDigitalServicesComponent', () => {
  let component: MarketingDigitalServicesComponent;
  let fixture: ComponentFixture<MarketingDigitalServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingDigitalServicesComponent]
    });
    fixture = TestBed.createComponent(MarketingDigitalServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
