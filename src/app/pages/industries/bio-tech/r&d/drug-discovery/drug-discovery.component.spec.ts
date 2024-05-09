import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugDiscoveryComponent } from './drug-discovery.component';

describe('DrugDiscoveryComponent', () => {
  let component: DrugDiscoveryComponent;
  let fixture: ComponentFixture<DrugDiscoveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrugDiscoveryComponent]
    });
    fixture = TestBed.createComponent(DrugDiscoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
