import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { registerModelFB } from '../models/register.model';
import { RegisterTransformer } from '../transformers/register-transformer';
import { registerModelResponse } from './../models/register.model';
import { AuthHttpService } from './auth-http.service';

/** servicio de autentificacion */
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /** constructor */
  constructor(
    private AuthHttpService: AuthHttpService,
    private RegisterTransformer: RegisterTransformer
  ) {}

  /** register */
  register(user: registerModelFB): Observable<registerModelResponse> {
    const userTransform = this.RegisterTransformer.transform(user);
    return this.AuthHttpService.register(userTransform);
  }
}
