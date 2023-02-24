import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { user } from 'src/app/app.model';
import { AppState } from 'src/app/app.state';
import * as actionsAuth from '../../state/auth/auth.actions';
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
    private LoginTransformer: LoginTransformer,
    private Router: Router,
    private store: Store<AppState>
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

  /** change state user */
  stateAuthLogin(user: user, access_token: string): void {
    localStorage.setItem('access_token', access_token);
    this.store.dispatch(actionsAuth.login({ user, access_token }));
  }

  /** change state user */
  stateAuthLogout(): void {
    localStorage.removeItem('access_token');
    this.store.dispatch(actionsAuth.logout());
    this.Router.navigate(['/']);
  }
}
