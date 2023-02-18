import { constants } from 'src/app/shared/constants/constants';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { loginModelFB, stateLoginModel } from '../../models/login.model';

/** pagina de login */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  /** constructor */
  constructor(private AuthService: AuthService) {}

  /** formulario de login */
  loginForm: loginModelFB = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
    ]),
  });

  /** estado */
  state: stateLoginModel = { error: false, message: '', send: false };

  /** envia el formulario */
  submit(): void {
    this.AuthService.login(this.loginForm).subscribe({
      next: (response) => {
        console.log(response);
        if (
          response.status === 401 &&
          response.message === 'Email or password incorrect'
        ) {
          this.state.send = true;
          this.state.error = true;
          this.state.message = 'auth.response.loginError';
        }

        if (response.access_token) {
          this.state.send = true;
          this.state.error = false;
          this.state.message = 'auth.response.loginOK';
        }

        setTimeout(() => {
          this.resetForm();
        }, constants.setTimeOut);
      },
    });
  }

  /** resetea el formulario */
  resetForm(): void {
    this.loginForm.reset();
    this.state = { error: false, message: '', send: false };
  }

  /** getter para el campo email */
  get email() {
    return this.loginForm.get('email');
  }

  /** getter para el campo password */
  get password() {
    return this.loginForm.get('password');
  }
}
