import { AbstractControl } from '@angular/forms';

export function PasswordConfirmationValidator(c: AbstractControl) {
  if (c.get('password')?.value !== c.get('password_confirmation')?.value) {
    return { noMatchPassword: true };
  }
  return null;
}
