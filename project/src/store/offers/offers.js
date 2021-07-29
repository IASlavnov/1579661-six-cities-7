import { createReducer } from '@reduxjs/toolkit';
import { SortType } from '../../const';
import { changeCity, setOffers, setSortType, setActiveCard,
  loadOffers, loadOffersNearBy, updateOffers, loadFavoriteOffers } from '../action';
import { adaptOffers, adaptOffer } from '../../utils/adapter';
import { updateAllOffers } from '../../utils/update-offers';

const initialState = {
  city: 'Paris',
  offers: [],
  filteredOffers: [],
  favoriteOffers: [],
  offersNear: [],
  sortType: SortType.POPULAR,
  activeCard: null,
  isDataLoaded: false,
};

const offers = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.filteredOffers = state.offers.filter(({city}) => city.name === action.payload);
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(setActiveCard, (state, action) => {
      state.activeCard = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = adaptOffers(action.payload);
      state.filteredOffers = adaptOffers(action.payload)
        .filter(({ city }) => city.name === state.city);
      state.isDataLoaded = true;
    })
    .addCase(loadOffersNearBy, (state, action) => {
      state.offersNear = adaptOffers(action.payload);
    })
    .addCase(updateOffers, (state, action) => {
      state.offers = updateAllOffers(state.offers, adaptOffer(action.payload));
      state.filteredOffers = updateAllOffers(state.offers, adaptOffer(action.payload))
        .filter(({ city }) => city.name === state.city);
      state.offersNear = updateAllOffers(state.offersNear, adaptOffer(action.payload));
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = adaptOffers(action.payload);
    });
});

export { offers };
