import { TestBed } from '@angular/core/testing';

import { HoroeServiceService } from './horoe-service.service';

describe('HoroeServiceService', () => {
  let service: HoroeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoroeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
