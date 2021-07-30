import { createReducer } from '@reduxjs/toolkit';
import { loadOneOffer, loadComments  } from '../action';
import { adaptOffer, adaptComments } from '../../utils/adapter';

const initialState = {
  offer: null,
  reviews: [],
};

const offer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOneOffer, (state, action) => {
      state.offer = adaptOffer(action.payload);
    })
    .addCase(loadComments, (state, action) => {
      state.reviews = adaptComments(action.payload);
    });
});

export { offer };
