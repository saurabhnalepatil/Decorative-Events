import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalDecorComponent } from './rental-decor.component';

describe('RentalDecorComponent', () => {
  let component: RentalDecorComponent;
  let fixture: ComponentFixture<RentalDecorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentalDecorComponent]
    });
    fixture = TestBed.createComponent(RentalDecorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
