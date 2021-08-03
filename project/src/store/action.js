import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: 'data/change-city',
  SET_OFFERS: 'data/set-offers',
  SET_SORT_TYPE: 'data/set-sort-type',
  SET_ACTIVE_CARD: 'data/set-active-card',
  LOAD_OFFERS: 'data/load-offers',
  REQUIRE_AUTHORIZATION: 'user/require-authorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'navigation/redirect-to-route',
  SET_USER: 'user/set-user',
  SET_ERROR: 'errors/set-error',
  LOAD_ONE_OFFER: 'data/load-one-offer',
  LOAD_OFFERS_NEARBY: 'data/load-offers-nearby',
  LOAD_COMMENTS: 'data/load-comments',
  UPDATE_OFFERS: 'data/update-offers',
  LOAD_FAVORITE_OFFERS: 'data/load-favorite-offers',
};

export const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({
  payload: city,
}));

export const setOffers = createAction(ActionType.SET_OFFERS, (city) => ({
  payload: city,
}));

export const setSortType = createAction(ActionType.SET_SORT_TYPE, (sortType) => ({
  payload: sortType,
}));

export const setActiveCard = createAction(ActionType.SET_ACTIVE_CARD, (cardId = null) => ({
  payload: cardId,
}));

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

export const updateOffers = createAction(ActionType.UPDATE_OFFERS, (offer) => ({
  payload: offer,
}));

export const loadFavoriteOffers = createAction(ActionType.LOAD_FAVORITE_OFFERS, (offers) => ({
  payload: offers,
}));

export const requireAuthorization = createAction(ActionType.REQUIRE_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const logout = createAction(ActionType.LOGOUT);

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

export const setUser = createAction(ActionType.SET_USER, (email) => ({
  payload: email,
}));

export const setError = createAction(ActionType.SET_ERROR, (message) => ({
  payload: message,
}));

export const loadOneOffer = createAction(ActionType.LOAD_ONE_OFFER, (offer) => ({
  payload: offer,
}));

export const loadOffersNearBy = createAction(ActionType.LOAD_OFFERS_NEARBY, (offers) => ({
  payload: offers,
}));

export const loadComments = createAction(ActionType.LOAD_COMMENTS, (comments) => ({
  payload: comments,
}));
