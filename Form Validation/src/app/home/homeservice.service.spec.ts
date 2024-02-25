import { TestBed, inject } from '@angular/core/testing';

import { HomeserviceService } from './homeservice.service';

describe('HomeserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeserviceService]
    });
  });

  it('should be created', inject([HomeserviceService], (service: HomeserviceService) => {
    expect(service).toBeTruthy();
  }));
});
