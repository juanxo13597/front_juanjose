import { FormGroup, FormControl } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthHttpService } from './auth-http.service';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
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
    expect(service.getToken()).toBeTruthy();
  });
});
