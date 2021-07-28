import { NameSpace } from '../root-reducer';

export const getOffer = (state) => state[NameSpace.OFFER].offer;

export const getOffersNear = (state) => state[NameSpace.OFFER].offersNear;

export const getReviews = (state) => state[NameSpace.OFFER].reviews;
