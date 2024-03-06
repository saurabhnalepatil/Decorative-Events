import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallonDecorationComponent } from './ballon-decoration.component';

describe('BallonDecorationComponent', () => {
  let component: BallonDecorationComponent;
  let fixture: ComponentFixture<BallonDecorationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BallonDecorationComponent]
    });
    fixture = TestBed.createComponent(BallonDecorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
