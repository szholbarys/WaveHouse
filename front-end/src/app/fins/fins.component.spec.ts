import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinsComponent } from './fins.component';

describe('FinsComponent', () => {
  let component: FinsComponent;
  let fixture: ComponentFixture<FinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
