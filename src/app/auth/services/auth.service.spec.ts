/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AuthHttpService } from './auth-http.service';

import { AuthService } from './auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { appState } from 'src/app/app.state';
import { StoreModule } from '@ngrx/store';

describe('AuthService', () => {
  let service: AuthService;
  const date = new Date();
  let access_token: BehaviorSubject<string>;
  let user: BehaviorSubject<any>;

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

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        StoreModule.forRoot(appState),
      ],
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
});
