import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InOutLicensingComponent } from './in-out-licensing.component';

describe('InOutLicensingComponent', () => {
  let component: InOutLicensingComponent;
  let fixture: ComponentFixture<InOutLicensingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InOutLicensingComponent]
    });
    fixture = TestBed.createComponent(InOutLicensingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
