import { AuthService } from './../services/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let service: AuthService;
  const date = new Date();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    });
    guard = TestBed.inject(AuthGuard);
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true if user is not logged in', () => {
    expect(guard.canActivate()).toBeTruthy();
  });

  it('should return false if user is logged in', () => {
    service.setUser({
      id: 1,
      name: 'test',
      email: 'email@email.es',
      created_at: date,
      updated_at: date,
      surname: 'test',
    });

    expect(guard.canActivate()).toBeFalsy();
  });
});
