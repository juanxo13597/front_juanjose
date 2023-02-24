import { user } from 'src/app/app.model';
import { createAction, props } from '@ngrx/store';

/** login */
export const login = createAction(
  '[Auth] login',
  props<{ user: user; access_token: string }>()
);

/** logout */
export const logout = createAction('[Auth] logout');
