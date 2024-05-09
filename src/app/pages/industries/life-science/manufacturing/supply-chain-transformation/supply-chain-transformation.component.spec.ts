import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyChainTransformationComponent } from './supply-chain-transformation.component';

describe('SupplyChainTransformationComponent', () => {
  let component: SupplyChainTransformationComponent;
  let fixture: ComponentFixture<SupplyChainTransformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplyChainTransformationComponent]
    });
    fixture = TestBed.createComponent(SupplyChainTransformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
