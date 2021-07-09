import offers from '../mocks/offers';
import reviews from '../mocks/reviews';
import { ActionType  } from './action';

const INITIAL_CITY = 'Amsterdam';

const initialState = {
  city: INITIAL_CITY,
  offers,
  reviews,
  filteredOffers: offers.filter(({ city }) => city.name === INITIAL_CITY),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.SET_OFFERS:
      return {
        ...state,
        filteredOffers: offers.filter(({ city }) => city.name === action.payload),
      };
    default:
      return state;
  }
};

export { reducer };
