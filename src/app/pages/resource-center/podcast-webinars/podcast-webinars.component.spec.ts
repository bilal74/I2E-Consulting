import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastWebinarsComponent } from './podcast-webinars.component';

describe('PodcastWebinarsComponent', () => {
  let component: PodcastWebinarsComponent;
  let fixture: ComponentFixture<PodcastWebinarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PodcastWebinarsComponent]
    });
    fixture = TestBed.createComponent(PodcastWebinarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
