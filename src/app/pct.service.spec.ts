import { TestBed } from '@angular/core/testing';

import { PctService } from './pct.service';

describe('PctService', () => {
  let service: PctService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PctService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
