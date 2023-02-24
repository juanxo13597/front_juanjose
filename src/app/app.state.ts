import { ActionReducerMap } from '@ngrx/store';
import { authModel } from './state/auth/auth.model';
import { authReducer } from './state/auth/auth.reducer';

/** app state interface */
export interface AppState {
  /** auth */
  auth: authModel;
}

/** app state */
export const appState: ActionReducerMap<AppState> = {
  auth: authReducer,
};
