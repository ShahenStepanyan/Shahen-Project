import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  KindsComponent
} from './info.component';

describe('KindsComponent', () => {
  let component: KindsComponent;
  let fixture: ComponentFixture < KindsComponent > ;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [KindsComponent]
      })
      .compileComponents();

    fixture = TestBed.createComponent(KindsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});