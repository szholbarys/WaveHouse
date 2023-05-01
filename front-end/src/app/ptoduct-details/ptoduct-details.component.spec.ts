import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtoductDetailsComponent } from './ptoduct-details.component';

describe('PtoductDetailsComponent', () => {
  let component: PtoductDetailsComponent;
  let fixture: ComponentFixture<PtoductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtoductDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtoductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
