import { TestBed } from '@angular/core/testing';

import { TypeHabitatService } from './type-habitat.service';

describe('TypeHabitatService', () => {
  let service: TypeHabitatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeHabitatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
