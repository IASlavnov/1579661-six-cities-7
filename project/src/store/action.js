export const ActionType = {
  CHANGE_CITY: 'CHANGE_CITY',
  SET_OFFERS: 'SET_OFFERS',
  SET_SORT_TYPE: 'SET_SORT_TYPE',
  SET_ACTIVE_CARD: 'SET_ACTIVE_CARD',
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
  setActiveCard: (cardId = '') => ({
    type: ActionType.SET_ACTIVE_CARD,
    payload: cardId,
  }),
};
