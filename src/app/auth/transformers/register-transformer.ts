import { registerModel } from './../models/register.model';
import { Injectable } from '@angular/core';
import { registerModelFB } from '../models/register.model';

/** register transformer */
@Injectable({
  providedIn: 'root',
})
export class RegisterTransformer {
  /** transformer  */
  transform(user: registerModelFB): registerModel {
    return {
      name: user.get('name')?.value || '',
      surname: user.get('surname')?.value || '',
      email: user.get('email')?.value || '',
      password: user.get('passwords')?.get('password')?.value || '',
      password_confirmation:
        user.get('passwords')?.get('password_confirmation')?.value || '',
    };
  }
}
