import { TestBed } from '@angular/core/testing';

import { SurfboardsService } from './surfboards.service';

describe('SurfboardsService', () => {
  let service: SurfboardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurfboardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
