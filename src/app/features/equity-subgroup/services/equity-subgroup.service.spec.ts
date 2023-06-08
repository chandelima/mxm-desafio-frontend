import { TestBed } from '@angular/core/testing';

import { EquitySubgroupService } from './equity-subgroup.service';

describe('EquitySubgroupService', () => {
  let service: EquitySubgroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquitySubgroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
