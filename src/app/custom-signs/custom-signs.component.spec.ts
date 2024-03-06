import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSignsComponent } from './custom-signs.component';

describe('CustomSignsComponent', () => {
  let component: CustomSignsComponent;
  let fixture: ComponentFixture<CustomSignsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomSignsComponent]
    });
    fixture = TestBed.createComponent(CustomSignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
