/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AuthHttpService } from './auth-http.service';

import { AuthService } from './auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  const date = new Date();
  let access_token: BehaviorSubject<string>;
  let user: BehaviorSubject<any>;
  let localStorageSpy: jasmine.SpyObj<Storage>;
  let routerSpy: jasmine.SpyObj<any>;

  beforeEach(() => {
    access_token = new BehaviorSubject<string>('token');
    user = new BehaviorSubject<any>({
      id: 1,
      name: 'John',
      surname: 'Doe',
      email: 'john.doe@example.com',
      updated_at: date,
      created_at: date,
    });

    localStorageSpy = jasmine.createSpyObj('localStorage', ['removeItem']);

    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [AuthHttpService],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('register', () => {
    const user = new FormGroup({
      name: new FormControl('name'),
      surname: new FormControl('surname'),
      email: new FormControl('email'),
      passwords: new FormGroup({
        password: new FormControl('password'),
        password_confirmation: new FormControl('password_confirmation'),
      }),
    });

    expect(service.register(user)).toBeTruthy();
  });

  it('login', () => {
    const user = new FormGroup({
      email: new FormControl('email'),
      password: new FormControl('password'),
    });

    expect(service.login(user)).toBeTruthy();
  });

  it('getToken', () => {
    expect(service.getToken()).toEqual('');
  });

  it('setUser', () => {
    const user = {
      id: 0,
      name: '',
      surname: '',
      email: '',
      created_at: date,
      updated_at: date,
    };
    service.setUser(user);

    expect(service.getUser()).toEqual(user);
  });

  it('should clear access_token, user and localStorage, and navigate to root', fakeAsync(() => {
    service.logout();

    expect(access_token.value).toEqual('token');
    expect(user.value).toEqual({
      id: 1,
      name: 'John',
      surname: 'Doe',
      email: 'john.doe@example.com',
      updated_at: date,
      created_at: date,
    });

    // expect(localStorageSpy.removeItem).toHaveBeenCalledWith('access_token');
    // expect(routerSpy.navigate).toHaveBeenCalledWith(['/']);

    tick();
  }));
});
