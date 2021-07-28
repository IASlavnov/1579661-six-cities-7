import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import { requireAuthorization, logout, setUser } from '../action';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  email: '',
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(logout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    })
    .addCase(setUser, (state, action) => {
      state.email = action.payload;
    });
});

export { user };
