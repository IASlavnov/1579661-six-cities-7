import { createReducer } from '@reduxjs/toolkit';
import { setError } from '../action';

const initialState = {
  error: null,
};

const error = createReducer(initialState, (builder) => {
  builder
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { error };
