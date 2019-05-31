import { TestBed } from '@angular/core/testing';

import { MarketConfService } from './market-conf.service';

describe('MarketConfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarketConfService = TestBed.get(MarketConfService);
    expect(service).toBeTruthy();
  });
});
