import { user } from 'src/app/app.model';
import { FormControl, FormGroup } from '@angular/forms';

/** modelo de registro para formularios */
export type loginModelFB = FormGroup<{
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}>;

/* modelo login */
export type loginModel = {
  email: string;
  password: string;
};

/** modelo de estado de registro */
export type stateLoginModel = {
  send: boolean;
  error: boolean;
  message: string;
};

/** modelo de respuesta login */
export type loginModelResponse = {
  access_token?: string;
  user?: user;

  response?: string;
  status?: number;
  message?: string;
};
