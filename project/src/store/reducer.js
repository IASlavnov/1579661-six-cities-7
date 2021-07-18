import reviews from '../mocks/reviews';
import { SortType } from '../const';
import { ActionType  } from './action';
import { adaptOffers } from '../utils/adapter';

const INITIAL_CITY = 'Paris';

const initialState = {
  city: INITIAL_CITY,
  offers: [],
  reviews,
  filteredOffers: [],
  sortType: SortType.POPULAR,
  activeCard: null,
  isDataLoaded: false,
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
        filteredOffers: state.offers
          .filter(({ city }) => city.name === action.payload),
      };
    case ActionType.SET_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };
    case ActionType.SET_ACTIVE_CARD:
      return {
        ...state,
        activeCard: action.payload,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: adaptOffers(action.payload),
        filteredOffers: adaptOffers(action.payload)
          .filter(({ city }) => city.name === state.city),
        isDataLoaded: true,
      };
    default:
      return state;
  }
};

export { reducer };
