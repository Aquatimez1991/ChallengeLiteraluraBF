import { TestBed } from '@angular/core/testing';

import { ApiLiteraturaService } from './api-literatura.service';

describe('ApiLiteraturaService', () => {
  let service: ApiLiteraturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiLiteraturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
