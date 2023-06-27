import { TestBed } from '@angular/core/testing';

import { FinsService } from './fins.service';

describe('FinsService', () => {
  let service: FinsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
