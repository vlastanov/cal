import { TestBed, inject } from '@angular/core/testing';

import { ProzorecService } from './prozorec.service';


describe('ProzorecService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProzorecService]
    });
  });

  it('should be created', inject([ProzorecService], (service: ProzorecService) => {
    expect(service).toBeTruthy();
  }));
});
