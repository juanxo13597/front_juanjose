import { PasswordConfirmationValidator } from './validators';
import { FormControl, FormGroup } from '@angular/forms';

describe('PasswordConfirmationValidator', () => {
  it('should return null if password and password_confirmation match', () => {
    const pass = new FormGroup({
      password: new FormControl('password'),
      password_confirmation: new FormControl('password'),
    });
    const result = PasswordConfirmationValidator(pass);

    expect(result).toBeNull();
  });

  it('should return { noMatchPassword: true } if password and password_confirmation do not match', () => {
    const pass = new FormGroup({
      password: new FormControl('password'),
      password_confirmation: new FormControl('password_confirmation'),
    });
    const result = PasswordConfirmationValidator(pass);

    expect(result).toEqual({ noMatchPassword: true });
  });
});
