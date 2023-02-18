import { FormControl, FormGroup } from '@angular/forms';
import { LoginTransformer } from './login-transformer';

describe('LoginTransformer', () => {
  const loginTransformer = new LoginTransformer();
  it('should create an instance', () => {
    expect(new LoginTransformer()).toBeTruthy();
  });

  it('should transform', () => {
    const user = new FormGroup({
      email: new FormControl('email'),
      password: new FormControl('password'),
    });

    expect(loginTransformer.transform(user)).toEqual({
      email: 'email',
      password: 'password',
    });
  });

  it('should transform invalid params', () => {
    const user = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });

    expect(loginTransformer.transform(user)).toEqual({
      email: '',
      password: '',
    });
  });
});
