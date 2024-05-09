import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryOptimizationComponent } from './inventory-optimization.component';

describe('InventoryOptimizationComponent', () => {
  let component: InventoryOptimizationComponent;
  let fixture: ComponentFixture<InventoryOptimizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryOptimizationComponent]
    });
    fixture = TestBed.createComponent(InventoryOptimizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
