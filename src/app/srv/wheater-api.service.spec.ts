import { TestBed } from '@angular/core/testing';

import { WheaterApiService } from './wheater-api.service';

describe('WheaterApiService', () => {
  let service: WheaterApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WheaterApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
