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
  on(actions.login, (state) => {
    console.log(state);
    console.log('login');
    return {
      ...state,
      login: true,
    };
  }),
  on(actions.logout, (state) => {
    console.log(state);
    console.log('logout');
    return {
      login: false,
    };
  })
);
