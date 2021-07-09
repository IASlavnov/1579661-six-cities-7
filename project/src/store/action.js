export const ActionType = {
  CHANGE_CITY: 'CHANGE_CITY',
  SET_OFFERS: 'SET_OFFERS',
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
};
