import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventIdeaComponent } from './event-idea.component';

describe('EventIdeaComponent', () => {
  let component: EventIdeaComponent;
  let fixture: ComponentFixture<EventIdeaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventIdeaComponent]
    });
    fixture = TestBed.createComponent(EventIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
