import { FormControl, FormGroup } from '@angular/forms';

/** modelo de registro */
export type registerModel = {
  name: string;
  surname: string;
  email: string;
  password: string;
  password_confirmation: string;
};

/** modelo de registro para formularios */
export type registerModelFB = FormGroup<{
  name: FormControl<string | null>;
  surname: FormControl<string | null>;
  email: FormControl<string | null>;
  passwords: FormGroup<{
    password: FormControl<string | null>;
    password_confirmation: FormControl<string | null>;
  }>;
}>;

/** modelo de respuesta de registro */
export type registerModelResponse = {
  id: number;
  email: string;
  name: string;
  surname: string;
  created_at: Date;
  updated_at: Date;

  response?: string;
  status?: number;
  message?: string;
};

export type stateRegisterModel = {
  send: boolean;
  error: boolean;
  message: string;
};
