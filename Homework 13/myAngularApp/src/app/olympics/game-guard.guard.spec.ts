import { TestBed, async, inject } from '@angular/core/testing';

import { GameGuardGuard } from './game-guard.guard';

describe('GameGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameGuardGuard]
    });
  });

  it('should ...', inject([GameGuardGuard], (guard: GameGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
