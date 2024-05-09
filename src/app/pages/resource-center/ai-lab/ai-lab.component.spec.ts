import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiLabComponent } from './ai-lab.component';

describe('AiLabComponent', () => {
  let component: AiLabComponent;
  let fixture: ComponentFixture<AiLabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiLabComponent]
    });
    fixture = TestBed.createComponent(AiLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
