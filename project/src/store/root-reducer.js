import { combineReducers } from 'redux';
import { offers } from './offers/offers';
import { offer } from './offer/offer';
import { user } from './user/user';
import { error } from './error/error';

export const NameSpace = {
  OFFERS: 'OFFERS',
  OFFER: 'OFFER',
  USER: 'USER',
  ERROR: 'ERROR',
};

export default combineReducers({
  [NameSpace.OFFERS]: offers,
  [NameSpace.OFFER]: offer,
  [NameSpace.USER]: user,
  [NameSpace.ERROR]: error,
});
