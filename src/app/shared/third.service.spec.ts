import { TestBed, inject } from '@angular/core/testing';

import { ThirdService } from './third.service';

describe('ThirdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThirdService]
    });
  });

  it('should be created', inject([ThirdService], (service: ThirdService) => {
    expect(service).toBeTruthy();
  }));
});
