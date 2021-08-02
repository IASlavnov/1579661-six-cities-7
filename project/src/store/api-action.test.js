import MockAdapter from 'axios-mock-adapter';
import { createApi } from '../services/api';
import { ActionType } from './action';
import {
  fetchOffers, fetchFavoriteOffers, changeOffers, fetchOneOffer, fetchOffersNearBy,
  fetchComments, checkAuth, login, logout, sendComment
} from './api-action';
import { ApiRoute, AppRoute, AuthorizationStatus } from '../const';

let api = null;

describe('Async operations', () => {
  beforeAll(() => {
    api = createApi(() => {});
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(ApiRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it('should make a correct catch error to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onPost(ApiRoute.LOGIN)
      .reply(401, {fake: true});

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_ERROR,
          payload: 'Request failed with status code 404',
        });
      });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: 'test@test.ru', password: '123456'};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(ApiRoute.LOGIN)
      .reply(200, fakeUser);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER,
          payload: fakeUser.email,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.ROOT,
        });
      });
  });

  it('should make a correct catch error to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: 'test@test.ru', password: '123456'};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(ApiRoute.LOGIN)
      .reply(400, {fake: true});

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_ERROR,
          payload: 'Request failed with status code 400',
        });
      });
  });

  it('should make a correct API call to DELETE /logout', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();

    apiMock
      .onDelete(ApiRoute.LOGOUT)
      .reply(204);

    return logoutLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER,
          payload: '',
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOGOUT,
        });
      });
  });

  it('should make a correct API call to GET /hotels', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchOffersLoader = fetchOffers();

    apiMock
      .onGet(ApiRoute.HOTELS)
      .reply(200, [{fake: true}]);

    return fetchOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [{fake: true}],
        });
      });
  });

  it('should make a correct API call to GET /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchFavoriteOffersLoader = fetchFavoriteOffers();

    apiMock
      .onGet(ApiRoute.FAVORITE)
      .reply(200, [{fake: true}]);

    return fetchFavoriteOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_OFFERS,
          payload: [{fake: true}],
        });
      });
  });

  it('should make a correct catch error to GET /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchFavoriteOffersLoader = fetchFavoriteOffers();

    apiMock
      .onGet(ApiRoute.FAVORITE)
      .reply(401, [{fake: true}]);

    return fetchFavoriteOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_ERROR,
          payload: 'Request failed with status code 401',
        });
      });
  });

  it('should make a correct API call to POST /favorite/:hotel_id/:status', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const testHotelId = 1;
    const testStatus = 1;
    const changeOffersLoader = changeOffers(testHotelId, testStatus);

    apiMock
      .onPost(`${ApiRoute.FAVORITE}/${testHotelId}/${testStatus}`)
      .reply(200, [{fake: true}]);

    return changeOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_OFFERS,
          payload: [{fake: true}],
        });
      });
  });

  it('should make a correct catch error to POST /favorite/:hotel_id/:status', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const testHotelId = 1;
    const testStatus = 1;
    const changeOffersLoader = changeOffers(testHotelId, testStatus);

    apiMock
      .onPost(`${ApiRoute.FAVORITE}/${testHotelId}/${testStatus}`)
      .reply(401, [{fake: true}]);

    return changeOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_ERROR,
          payload: 'Request failed with status code 401',
        });
      });
  });

  it('should make a correct API call to GET /hotels/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const testHotelId = 1;
    const fetchOneOfferLoader = fetchOneOffer(testHotelId);

    apiMock
      .onGet(`${ApiRoute.HOTELS}/${testHotelId}`)
      .reply(200, [{fake: true}]);

    return fetchOneOfferLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_ONE_OFFER,
          payload: [{fake: true}],
        });
      });
  });

  it('should make a correct catch error to GET /hotels/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const testHotelId = 1;
    const fetchOneOfferLoader = fetchOneOffer(testHotelId);

    apiMock
      .onGet(`${ApiRoute.HOTELS}/${testHotelId}`)
      .reply(404, [{fake: true}]);

    return fetchOneOfferLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.NOT_FOUND,
        });
      });
  });

  it('should make a correct API call to GET /hotels/:hotel_id/nearby', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const testHotelId = 1;
    const fetchOffersNearByLoader = fetchOffersNearBy(testHotelId);

    apiMock
      .onGet(`${ApiRoute.HOTELS}/${testHotelId}/nearby`)
      .reply(200, [{fake: true}]);

    return fetchOffersNearByLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS_NEARBY,
          payload: [{fake: true}],
        });
      });
  });

  it('should make a correct catch error to GET /hotels/:hotel_id/nearby', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const testHotelId = 1;
    const fetchOffersNearByLoader = fetchOffersNearBy(testHotelId);

    apiMock
      .onGet(`${ApiRoute.HOTELS}/${testHotelId}/nearby`)
      .reply(404, [{fake: true}]);

    return fetchOffersNearByLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.NOT_FOUND,
        });
      });
  });

  it('should make a correct API call to GET /comments/:hotel_id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const testHotelId = 1;
    const fetchCommentsLoader = fetchComments(testHotelId);

    apiMock
      .onGet(`${ApiRoute.COMMENTS}/${testHotelId}`)
      .reply(200, [{fake: true}]);

    return fetchCommentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: [{fake: true}],
        });
      });
  });

  it('should make a correct catch error to GET /comments/:hotel_id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const testHotelId = 1;
    const fetchCommentsLoader = fetchComments(testHotelId);

    apiMock
      .onGet(`${ApiRoute.COMMENTS}/${testHotelId}`)
      .reply(400);

    return fetchCommentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.NOT_FOUND,
        });
      });
  });

  it('should make a correct API call to POST /comments/:hotel_id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const testHotelId = 1;
    const testComment = {comment: 'test', rating: 5};
    const sendCommentLoader = sendComment(testHotelId, testComment);

    apiMock
      .onPost(`${ApiRoute.COMMENTS}/${testHotelId}`)
      .reply(200, [{fake: true}]);

    return sendCommentLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: [{fake: true}],
        });
      });
  });

  it('should make a correct catch error to POST /comments/:hotel_id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const testHotelId = 1;
    const testComment = {comment: 'test', rating: 5};
    const sendCommentLoader = sendComment(testHotelId, testComment);

    apiMock
      .onPost(`${ApiRoute.COMMENTS}/${testHotelId}`)
      .reply(400, [{fake: true}]);

    return sendCommentLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_ERROR,
          payload: 'Request failed with status code 400',
        });
      });
  });

  it('should make a correct catch error #2 to POST /comments/:hotel_id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const testHotelId = 1;
    const testComment = {comment: 'test', rating: 5};
    const sendCommentLoader = sendComment(testHotelId, testComment);

    apiMock
      .onPost(`${ApiRoute.COMMENTS}/${testHotelId}`)
      .reply(401, [{fake: true}]);

    return sendCommentLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_ERROR,
          payload: 'Request failed with status code 401',
        });
      });
  });
});
