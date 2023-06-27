import { TestBed } from '@angular/core/testing';

import { WetsuitsService } from './wetsuits.service';

describe('WetsuitsService', () => {
  let service: WetsuitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WetsuitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
