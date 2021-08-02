import {
  changeCity, setOffers, setSortType, setActiveCard, loadOffers, updateOffers, loadFavoriteOffers,
  requireAuthorization, logout, redirectToRoute, setUser, setError, loadOneOffer, loadOffersNearBy,
  loadComments, ActionType
} from './action';

const TEST_OFFER = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
  host: {
    avatarUrl: 'img/avatar-angelina.jpg',
    id: 1,
    isPro: true,
    name: 'Angelina',
  },
  id: 1,
  images: ['img/apartment-01.jpg', 'img/apartment-02.jpg'],
  isPremium: true,
  isFavorite: false,
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 8,
  },
  maxAdults: 4,
  previewImage: 'img/apartment-01.jpg',
  price: 120,
  rating: 4,
  title: 'Beautiful luxurious apartment at great location',
  type: 'Apartment',
};

describe('Actions', () => {
  it('action creator for change city returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: TEST_OFFER.city.name,
    };

    expect(changeCity(TEST_OFFER.city.name)).toEqual(expectedAction);
  });

  it('action creator for set offers returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_OFFERS,
      payload: TEST_OFFER.city.name,
    };

    expect(setOffers(TEST_OFFER.city.name)).toEqual(expectedAction);
  });

  it('action creator for set type of sort returns correct action', () => {
    const sortType = 'popular';

    const expectedAction = {
      type: ActionType.SET_SORT_TYPE,
      payload: sortType,
    };

    expect(setSortType(sortType)).toEqual(expectedAction);
  });

  it('action creator for set active card returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_ACTIVE_CARD,
      payload: TEST_OFFER.id,
    };

    expect(setActiveCard(TEST_OFFER.id)).toEqual(expectedAction);
  });

  it('action creator for set active card without argument returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_ACTIVE_CARD,
      payload: null,
    };

    expect(setActiveCard()).toEqual(expectedAction);
  });

  it('action creator for load offers returns correct action', () => {
    const offers = [TEST_OFFER, TEST_OFFER];

    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };

    expect(loadOffers(offers)).toEqual(expectedAction);
  });

  it('action creator for update offers returns correct action', () => {
    const expectedAction = {
      type: ActionType.UPDATE_OFFERS,
      payload: TEST_OFFER,
    };

    expect(updateOffers(TEST_OFFER)).toEqual(expectedAction);
  });

  it('action creator for load favorite offers returns correct action', () => {
    const offers = [TEST_OFFER, TEST_OFFER];

    const expectedAction = {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: offers,
    };

    expect(loadFavoriteOffers(offers)).toEqual(expectedAction);
  });

  it('action creator for require authorization returns correct action', () => {
    const authorizationStatus = 'NO_AUTH';

    const expectedAction = {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: authorizationStatus,
    };

    expect(requireAuthorization(authorizationStatus)).toEqual(expectedAction);
  });

  it('action creator for logout returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(logout()).toEqual(expectedAction);
  });

  it('action creator for redirect returns correct action', () => {
    const url = '/favorite';

    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: url,
    };

    expect(redirectToRoute(url)).toEqual(expectedAction);
  });

  it('action creator for set user returns correct action', () => {
    const email = 'example@mail.com';

    const expectedAction = {
      type: ActionType.SET_USER,
      payload: email,
    };

    expect(setUser(email)).toEqual(expectedAction);
  });

  it('action creator for set error returns correct action', () => {
    const message = 'example';

    const expectedAction = {
      type: ActionType.SET_ERROR,
      payload: message,
    };

    expect(setError(message)).toEqual(expectedAction);
  });

  it('action creator for load one offer returns correct actio', () => {
    const expectedAction = {
      type: ActionType.LOAD_ONE_OFFER,
      payload: TEST_OFFER,
    };

    expect(loadOneOffer(TEST_OFFER)).toEqual(expectedAction);
  });

  it('action creator for load offers near returns correct action', () => {
    const offers = [TEST_OFFER, TEST_OFFER];

    const expectedAction = {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: offers,
    };

    expect(loadOffersNearBy(offers)).toEqual(expectedAction);
  });

  it('action creator for load comments returns correct action', () => {
    const reviews = [
      {
        comment: '',
        id: 1,
      },
    ];

    const expectedAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: reviews,
    };

    expect(loadComments(reviews)).toEqual(expectedAction);
  });
});
