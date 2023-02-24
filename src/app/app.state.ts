import { ActionReducerMap } from '@ngrx/store';
import { authModel } from './state/auth/auth.model';
import { authReducer } from './state/auth/auth.reducer';

/** model app state */
export interface AppState {
  auth: authModel;
}

/** const app state */
export const appState: ActionReducerMap<AppState> = {
  auth: authReducer,
};
