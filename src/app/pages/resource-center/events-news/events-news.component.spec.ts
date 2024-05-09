import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsNewsComponent } from './events-news.component';

describe('EventsNewsComponent', () => {
  let component: EventsNewsComponent;
  let fixture: ComponentFixture<EventsNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsNewsComponent]
    });
    fixture = TestBed.createComponent(EventsNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
