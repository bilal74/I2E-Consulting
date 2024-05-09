import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RAndDComponent } from './r-and-d.component';

describe('RAndDComponent', () => {
  let component: RAndDComponent;
  let fixture: ComponentFixture<RAndDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RAndDComponent]
    });
    fixture = TestBed.createComponent(RAndDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
