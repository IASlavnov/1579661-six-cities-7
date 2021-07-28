import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: 'CHANGE_CITY',
  SET_OFFERS: 'SET_OFFERS',
  SET_SORT_TYPE: 'SET_SORT_TYPE',
  SET_ACTIVE_CARD: 'SET_ACTIVE_CARD',
  LOAD_OFFERS: 'LOAD_OFFERS',
  REQUIRE_AUTHORIZATION: 'REQUIRE_AUTHORIZATION',
  LOGOUT: 'LOGOUT',
  REDIRECT_TO_ROUTE: 'REDIRECT_TO_ROUTE',
  SET_USER: 'SET_USER',
  SET_ERROR: 'SET_ERROR',
  LOAD_ONE_OFFER: 'LOAD__ONE_OFFER',
  LOAD_OFFERS_NEARBY: 'LOAD_OFFERS_NEARBY',
  LOAD_COMMENTS: 'LOAD_COMMENTS',
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
