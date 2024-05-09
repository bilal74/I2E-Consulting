import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpmConsultingComponent } from './ppm-consulting.component';

describe('PpmConsultingComponent', () => {
  let component: PpmConsultingComponent;
  let fixture: ComponentFixture<PpmConsultingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PpmConsultingComponent]
    });
    fixture = TestBed.createComponent(PpmConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
