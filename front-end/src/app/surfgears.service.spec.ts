import { TestBed } from '@angular/core/testing';

import { SurfgearsService } from './surfgears.service';

describe('SurfgearsService', () => {
  let service: SurfgearsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurfgearsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
