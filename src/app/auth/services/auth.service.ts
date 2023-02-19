import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  private access_token: string;

  /** constructor */
  constructor(
    private AuthHttpService: AuthHttpService,
    private RegisterTransformer: RegisterTransformer,
    private LoginTransformer: LoginTransformer
  ) {
    this.access_token = localStorage.getItem('access_token') || '';
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
    this.access_token = token;
    localStorage.setItem('access_token', token);
  }

  /** get token */
  getToken(): string {
    return this.access_token;
  }
}
