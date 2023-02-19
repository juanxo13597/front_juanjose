import { AuthService } from '../../auth/services/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { ActivatedRouteSnapshot } from '@angular/router';

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
    const activatedRoute = new ActivatedRouteSnapshot();

    expect(guard.canActivate(activatedRoute)).toBeTruthy();
  });

  it('user auth for any route', () => {
    const activatedRoute = new ActivatedRouteSnapshot();
    activatedRoute.data = { auth: undefined };
    spyOn(service, 'getUser').and.returnValue({
      id: 1,
      name: 'test',
      surname: 'test',
      email: 'email@email.es',
      created_at: date,
      updated_at: date,
    });

    expect(guard.canActivate(activatedRoute)).toBeTruthy();
  });

  it('user auth for login route', () => {
    const activatedRoute = new ActivatedRouteSnapshot();
    activatedRoute.data = { auth: true };
    spyOn(service, 'getUser').and.returnValue({
      id: 1,
      name: 'test',
      surname: 'test',
      email: 'email@email.es',
      created_at: date,
      updated_at: date,
    });

    expect(guard.canActivate(activatedRoute)).toBeFalsy();
  });

  it('user no auth for route login or register', () => {
    const activatedRoute = new ActivatedRouteSnapshot();
    activatedRoute.data = { auth: undefined };
    spyOn(service, 'getUser').and.returnValue({
      id: 0,
      name: 'test',
      surname: 'test',
      email: 'email@email.es',
      created_at: date,
      updated_at: date,
    });

    expect(guard.canActivate(activatedRoute)).toBeFalsy();
  });
});
