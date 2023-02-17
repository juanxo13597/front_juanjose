import { FormGroup, FormControl } from '@angular/forms';
import { RegisterTransformer } from './register-transformer';

describe('RegisterTransformer', () => {
  const registerTransformer = new RegisterTransformer();
  it('should create an instance', () => {
    expect(new RegisterTransformer()).toBeTruthy();
  });

  it('transform data', () => {
    const user = new FormGroup({
      name: new FormControl('name'),
      surname: new FormControl('surname'),
      email: new FormControl('email'),
      passwords: new FormGroup({
        password: new FormControl('password'),
        password_confirmation: new FormControl('password_confirmation'),
      }),
    });

    expect(registerTransformer.transform(user)).toEqual({
      name: 'name',
      surname: 'surname',
      email: 'email',
      password: 'password',
      password_confirmation: 'password_confirmation',
    });
  });

  it('invalid data', () => {
    const user = new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
      email: new FormControl(''),
      passwords: new FormGroup({
        password: new FormControl(''),
        password_confirmation: new FormControl(''),
      }),
    });

    expect(registerTransformer.transform(user)).toEqual({
      name: '',
      surname: '',
      email: '',
      password: '',
      password_confirmation: '',
    });
  });
});
