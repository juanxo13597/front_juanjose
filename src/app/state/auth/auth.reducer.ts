import { createReducer, on } from '@ngrx/store';
import * as actions from './auth.actions';
import { authModel } from './auth.model';

/** init state */
export const initialState: authModel = {
  login: false,
};

/** auth reducer */
export const authReducer = createReducer(
  initialState,
  on(actions.login, (state, props) => {
    return {
      login: true,
      user: props.user,
      access_token: props.access_token,
    };
  }),
  on(actions.logout, () => {
    return {
      login: false,
      user: undefined,
      access_token: undefined,
    };
  })
);
