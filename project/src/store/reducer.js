import { SortType, AuthorizationStatus } from '../const';
import { ActionType  } from './action';
import { adaptOffer, adaptOffers, adaptComments } from '../utils/adapter';

const INITIAL_CITY = 'Paris';

const initialState = {
  city: INITIAL_CITY,
  offers: [],
  offer: null,
  offersNear: [],
  reviews: [],
  filteredOffers: [],
  sortType: SortType.POPULAR,
  activeCard: null,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  email: '',
  error: null,
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
    case ActionType.LOAD_ONE_OFFER:
      return {
        ...state,
        offer: adaptOffer(action.payload),
      };
    case ActionType.LOAD_OFFERS_NEARBY:
      return {
        ...state,
        offersNear: adaptOffers(action.payload),
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        reviews: adaptComments(action.payload),
      };
    case ActionType.REQUIRE_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    case ActionType.SET_USER:
      return {
        ...state,
        email: action.payload,
      };
    case ActionType.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { reducer };
