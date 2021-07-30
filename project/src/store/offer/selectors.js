import { NameSpace } from '../root-reducer';

export const getOffer = (state) => state[NameSpace.OFFER].offer;

export const getReviews = (state) => state[NameSpace.OFFER].reviews;
