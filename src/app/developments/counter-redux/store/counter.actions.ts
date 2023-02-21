import { createAction } from '@ngrx/store';

/** increment */
export const increment = createAction('[Counter Component] Increment');

/** decrement */
export const decrement = createAction('[Counter Component] Decrement');

/** reset */
export const reset = createAction('[Counter Component] Reset');
