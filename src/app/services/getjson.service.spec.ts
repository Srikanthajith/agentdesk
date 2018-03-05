/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetjsonService } from './getjson.service';

describe('Service: Getjson', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetjsonService]
    });
  });

  it('should ...', inject([GetjsonService], (service: GetjsonService) => {
    expect(service).toBeTruthy();
  }));
});