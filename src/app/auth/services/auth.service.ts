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
  /** constructor */
  constructor(
    private AuthHttpService: AuthHttpService,
    private RegisterTransformer: RegisterTransformer,
    private LoginTransformer: LoginTransformer
  ) {}

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
}
