import { counterReducer, initialState } from './counter.reducer';
import { increment, decrement, reset } from './counter.actions';

describe('CounterReducer', () => {
  it('should increment the counter', () => {
    const action = increment();
    const state = counterReducer(initialState, action);

    expect(state).toEqual(1);
  });

  it('should decrement the counter', () => {
    const action = decrement();
    const state = counterReducer(initialState, action);

    expect(state).toEqual(-1);
  });

  it('should reset the counter', () => {
    const action = reset();
    const state = counterReducer(5, action);

    expect(state).toEqual(0);
  });
});
