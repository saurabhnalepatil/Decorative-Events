import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackdropsComponent } from './backdrops.component';

describe('BackdropsComponent', () => {
  let component: BackdropsComponent;
  let fixture: ComponentFixture<BackdropsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackdropsComponent]
    });
    fixture = TestBed.createComponent(BackdropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
