import { registerModelResponse } from './../../models/register.model';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordConfirmationValidator } from '../../../shared/services/validators';
import {
  registerModelFB,
  stateRegisterModel,
} from '../../models/register.model';
import { AuthService } from './../../services/auth.service';
import { constants } from '../../../shared/constants/constants';

/** pagina de registro */
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  /** formulario de registro */
  registerForm: registerModelFB = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(10)],
    ],
    surname: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(20)],
    ],
    email: ['', [Validators.required, Validators.email]],
    passwords: this.fb.group(
      {
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),
          ],
        ],
        password_confirmation: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),
          ],
        ],
      },
      { validator: PasswordConfirmationValidator }
    ),
  });

  state: stateRegisterModel = { error: false, message: '', send: false };

  /** constructor */
  constructor(private fb: FormBuilder, private AuthService: AuthService) {}

  /** submit */
  submit(): void {
    this.AuthService.register(this.registerForm).subscribe({
      next: (resp) => {
        this.manageState(resp);
      },
    });
  }

  /** manage state */
  manageState(resp: registerModelResponse): void {
    if (resp.email) {
      this.state = {
        error: false,
        message: 'auth.response.registerOK',
        send: true,
      };
    }

    if (resp.status === 401 && resp.message === 'Email already exists') {
      this.state = {
        error: true,
        message: 'auth.response.emailExists',
        send: true,
      };
    }

    if (
      resp.status === 401 &&
      resp.message === 'Password confirmation does not match'
    ) {
      this.state = {
        error: true,
        message: 'auth.response.passwordsNotMatch',
        send: true,
      };
    }

    setTimeout(() => {
      this.resetForm();
    }, constants.setTimeOut);
  }

  /** reset state */
  resetForm(): void {
    this.state = { error: false, message: '', send: false };
    this.registerForm.reset();
  }

  /** get name */
  get name() {
    return this.registerForm.get('name');
  }

  /** get surname */
  get surname() {
    return this.registerForm.get('surname');
  }

  /** get email */
  get email() {
    return this.registerForm.get('email');
  }

  /** get all passwords */
  get passwords() {
    return this.registerForm.get('passwords');
  }

  /** get password */
  get password() {
    return this.registerForm.get('passwords.password');
  }

  /** get password_confirmation */
  get password_confirmation() {
    return this.registerForm.get('passwords.password_confirmation');
  }
}
