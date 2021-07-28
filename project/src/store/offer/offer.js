import { ActionType  } from '../action';
import { adaptOffer, adaptOffers, adaptComments } from '../../utils/adapter';

const initialState = {
  offer: null,
  offersNear: [],
  reviews: [],
};

const offer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export { offer };
