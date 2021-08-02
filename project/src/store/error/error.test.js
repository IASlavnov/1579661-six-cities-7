import { error } from './error';
import { ActionType } from '../action';

describe('Reducer: error', () => {
  it('without additional parameters should return initial state', () => {
    expect(error(undefined, {})).toEqual({error: null});
  });

  it('should update error message', () => {
    const state = {error: null};
    const message = 'test';

    const setErrorAction = {
      type: ActionType.SET_ERROR,
      payload: message,
    };

    expect(error(state, setErrorAction)).toEqual({error: message});
  });
});
