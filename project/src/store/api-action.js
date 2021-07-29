import { loadOffers, setError, loadOneOffer, redirectToRoute, loadOffersNearBy,
  loadComments, requireAuthorization, setUser, logout as closeSession, loadFavoriteOffers, updateOffers } from './action';
import { ApiRoute, AuthorizationStatus, AppRoute } from '../const';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.HOTELS)
    .then(({data}) => dispatch(loadOffers(data)))
    .catch((error) => dispatch(setError(error.message)))
);

export const fetchFavoriteOffers = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.FAVORITE)
    .then(({data}) => dispatch(loadFavoriteOffers(data)))
    .catch((error) => dispatch(setError(error.message)))
);

export const changeOffers = (id, status) => (dispatch, _getState, api) => (
  api.post(`${ApiRoute.FAVORITE}/${id}/${+status}`)
    .then(({data}) => dispatch(updateOffers(data)))
    .catch((error) => dispatch(setError(error.message)))
);

export const fetchOneOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.HOTELS}/${id}`)
    .then(({data}) => dispatch(loadOneOffer(data)))
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);

export const fetchOffersNearBy = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.HOTELS}/${id}/nearby`)
    .then(({data}) => dispatch(loadOffersNearBy(data)))
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(loadComments(data)))
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((error) => dispatch(setError(error.message)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(ApiRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(setUser(data.email));
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
    .catch((error) => dispatch(setError(error.message)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(ApiRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(setUser('')))
    .then(() => dispatch(closeSession()))
    .catch((error) => dispatch(setError(error.message)))
);

export const sendComment = (id, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${ApiRoute.COMMENTS}/${id}`, {comment, rating})
    .then(({data}) => dispatch(loadComments(data)))
    .catch((error) => dispatch(setError(error.message)))
);
