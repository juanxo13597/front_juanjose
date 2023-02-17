import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordConfirmationValidator } from '../../../shared/services/validators';

/** pagina de registro */
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  /** formulario de registro */
  registerForm = this.fb.group({
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

  /** constructor */
  constructor(private fb: FormBuilder) {}

  /** submit */
  submit() {
    console.log(this.registerForm.value);
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
