import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { bailleurGuard } from './bailleur.guard';

describe('bailleurGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => bailleurGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
