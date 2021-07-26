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

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  setOffers: (city) => ({
    type: ActionType.SET_OFFERS,
    payload: city,
  }),
  setSortType: (sortType) => ({
    type: ActionType.SET_SORT_TYPE,
    payload: sortType,
  }),
  setActiveCard: (cardId = null) => ({
    type: ActionType.SET_ACTIVE_CARD,
    payload: cardId,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  setUser: (email) => ({
    type: ActionType.SET_USER,
    payload: email,
  }),
  setError: (message) => ({
    type: ActionType.SET_ERROR,
    payload: message,
  }),
  loadOneOffer: (offer) => ({
    type: ActionType.LOAD_ONE_OFFER,
    payload: offer,
  }),
  loadOffersNearBy: (offers) => ({
    type: ActionType.LOAD_OFFERS_NEARBY,
    payload: offers,
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
};
