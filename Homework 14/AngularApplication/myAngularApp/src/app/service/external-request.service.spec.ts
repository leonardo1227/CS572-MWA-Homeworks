import { TestBed } from '@angular/core/testing';

import { ExternalRequestService } from './external-request.service';

describe('ExternalRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExternalRequestService = TestBed.get(ExternalRequestService);
    expect(service).toBeTruthy();
  });
});
