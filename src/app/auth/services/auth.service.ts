import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { user } from 'src/app/app.model';
import { registerModelFB } from '../models/register.model';
import { RegisterTransformer } from '../transformers/register-transformer';
import { loginModelFB, loginModelResponse } from './../models/login.model';
import { registerModelResponse } from './../models/register.model';
import { LoginTransformer } from './../transformers/login-transformer';
import { AuthHttpService } from './auth-http.service';

/** servicio de autentificacion */
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /** token */
  private access_token: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  access_token$ = this.access_token.asObservable();
  private user: BehaviorSubject<user> = new BehaviorSubject<user>({
    id: 0,
    name: '',
    email: '',
    updated_at: '',
    created_at: '',
  });
  user$ = this.user.asObservable();

  /** constructor */
  constructor(
    private AuthHttpService: AuthHttpService,
    private RegisterTransformer: RegisterTransformer,
    private LoginTransformer: LoginTransformer,
    private Router: Router
  ) {
    this.access_token.next(localStorage.getItem('access_token') || '');
  }

  /** register */
  register(user: registerModelFB): Observable<registerModelResponse> {
    const userTransform = this.RegisterTransformer.transform(user);
    return this.AuthHttpService.register(userTransform);
  }

  /** login */
  login(user: loginModelFB): Observable<loginModelResponse> {
    const userTransform = this.LoginTransformer.transform(user);
    return this.AuthHttpService.login(userTransform);
  }

  /** set token localstorage */
  setToken(token: string): void {
    this.access_token.next(token);
    localStorage.setItem('access_token', token);
  }

  /** get token */
  getToken(): string {
    return this.access_token.getValue();
  }

  /** set user */
  setUser(user: user): void {
    this.user.next(user);
  }

  /** get user */
  getUser(): user {
    return this.user.getValue();
  }

  /** logout */
  logout(): void {
    this.access_token.next('');
    this.user.next({
      id: 0,
      name: '',
      email: '',
      updated_at: '',
      created_at: '',
    });
    localStorage.removeItem('access_token');

    this.Router.navigate(['/']);
  }
}
