import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
    password: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(20)],
    ],
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

  /** get password */
  get password() {
    return this.registerForm.get('password');
  }
}
