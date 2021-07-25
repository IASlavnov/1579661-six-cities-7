import { ActionCreator } from './action';
import { ApiRoute, AuthorizationStatus, AppRoute } from '../const';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.HOTELS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
    .catch((error) => dispatch(ActionCreator.setError(error.message)))
);

export const fetchOneOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.HOTELS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadOneOffer(data)))
    .catch(() => dispatch(ActionCreator.redirectToRoute(AppRoute.NOT_FOUND)))
);

export const fetchOffersNearBy = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.HOTELS}/${id}/nearby`)
    .then(({data}) => dispatch(ActionCreator.loadOffersNearBy(data)))
    .catch(() => dispatch(ActionCreator.redirectToRoute(AppRoute.NOT_FOUND)))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadComments(data)))
    .catch(() => dispatch(ActionCreator.redirectToRoute(AppRoute.NOT_FOUND)))
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

export const sendComment = (id, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${ApiRoute.COMMENTS}/${id}`, {comment, rating})
    .then(({data}) => dispatch(ActionCreator.loadComments(data)))
    .catch((error) => dispatch(ActionCreator.setError(error.message)))
);
