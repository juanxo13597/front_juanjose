import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

/** init state */
export const initialState = 0;

/** reducer */
export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, () => 0)
);
