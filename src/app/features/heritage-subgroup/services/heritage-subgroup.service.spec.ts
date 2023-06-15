import { TestBed } from '@angular/core/testing';

import { HeritageSubgroupService } from './heritage-subgroup.service';

describe('HeritageSubgroupService', () => {
  let service: HeritageSubgroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeritageSubgroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
