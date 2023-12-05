import { TestBed } from '@angular/core/testing';

import { ConcurrenciesService } from './concurrencies.service';

describe('ConcurrenciesService', () => {
  let service: ConcurrenciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConcurrenciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
