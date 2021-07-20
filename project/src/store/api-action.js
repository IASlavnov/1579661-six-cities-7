import { ActionCreator } from './action';
import { ApiRoute, AuthorizationStatus, AppRoute } from '../const';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.HOTELS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
    .catch((error) => dispatch(ActionCreator.setError(error.message)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((error) => dispatch(ActionCreator.setError(error.message)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(ApiRoute.LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(ActionCreator.setUser(email)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
    .catch((error) => dispatch(ActionCreator.setError(error.message)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(ApiRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.setUser('')))
    .then(() => dispatch(ActionCreator.logout()))
    .catch((error) => dispatch(ActionCreator.setError(error.message)))
);
