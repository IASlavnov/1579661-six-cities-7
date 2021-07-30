import { NameSpace } from '../root-reducer';

export const getCity = (state) => state[NameSpace.OFFERS].city;

export const getOffers = (state) => state[NameSpace.OFFERS].offers;

export const getFilteredOffers = (state) => state[NameSpace.OFFERS].filteredOffers;

export const getSortType = (state) => state[NameSpace.OFFERS].sortType;

export const getActiveCard = (state) => state[NameSpace.OFFERS].activeCard;

export const getIsDataLoaded = (state) => state[NameSpace.OFFERS].isDataLoaded;

export const getOffersNear = (state) => state[NameSpace.OFFERS].offersNear;

export const getFavoriteOffers = (state) => state[NameSpace.OFFERS].favoriteOffers;
