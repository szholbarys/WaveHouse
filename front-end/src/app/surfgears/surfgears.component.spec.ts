import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfgearsComponent } from './surfgears.component';

describe('SurfgearsComponent', () => {
  let component: SurfgearsComponent;
  let fixture: ComponentFixture<SurfgearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurfgearsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurfgearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
