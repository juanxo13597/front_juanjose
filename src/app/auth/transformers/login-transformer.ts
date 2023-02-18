import { Injectable } from '@angular/core';
import { loginModel, loginModelFB } from '../models/login.model';

/** login transformer */
@Injectable({
  providedIn: 'root',
})
export class LoginTransformer {
  /** transforma el modelo de registro */
  transform(user: loginModelFB): loginModel {
    return {
      email: user.get('email')?.value || '',
      password: user.get('password')?.value || '',
    };
  }
}
