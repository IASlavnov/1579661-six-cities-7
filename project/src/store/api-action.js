import { ActionCreator } from './action';
import { ApiRoute } from '../const';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.HOTELS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
);
