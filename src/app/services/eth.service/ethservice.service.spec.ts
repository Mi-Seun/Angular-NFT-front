import { TestBed } from '@angular/core/testing';

import { EthserviceService } from './ethservice.service';

describe('EthserviceService', () => {
  let service: EthserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EthserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
