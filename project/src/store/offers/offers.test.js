import { offers } from './offers';
import { ActionType } from '../action';
import { SortType } from '../../const';
import { adaptOffers, adaptOffer } from '../../utils/adapter';
import { updateAllOffers } from '../../utils/update-offers';

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

describe('Reducer: offers', () => {
  it('without additional parameters should return initial state', () => {
    const state = {
      city: 'Paris',
      offers: [],
      filteredOffers: [],
      favoriteOffers: [],
      offersNear: [],
      sortType: SortType.POPULAR,
      activeCard: null,
      isDataLoaded: false,
    };

    expect(offers(undefined, {})).toEqual(state);
  });

  it('should change city', () => {
    const state = {city: 'Paris'};
    const testCity = 'Amsterdam';

    const changeCityAction = {
      type: ActionType.CHANGE_CITY,
      payload: testCity,
    };

    expect(offers(state, changeCityAction)).toEqual({city: testCity});
  });

  it('should set offers', () => {
    const testOffers = [TEST_OFFER, TEST_OFFER];
    const testCity = 'Paris';
    const state = {
      offers: testOffers,
      filteredOffers: [],
    };

    const setOffersAction = {
      type: ActionType.SET_OFFERS,
      payload: testCity,
    };

    expect(offers(state, setOffersAction))
      .toEqual({offers: testOffers, filteredOffers: state.offers.filter((offer) => offer.city === testCity)});
  });

  it('should set sort type', () => {
    const state = { sortType: SortType.POPULAR};

    const setSortTypeAction = {
      type: ActionType.SET_SORT_TYPE,
      payload: SortType.PRICE_TO_HIGH,
    };

    expect(offers(state, setSortTypeAction)).toEqual({sortType: SortType.PRICE_TO_HIGH});
  });

  it('should set active card', () => {
    const state = {activeCard: null};

    const setActiveCardAction = {
      type: ActionType.SET_ACTIVE_CARD,
      payload: 1,
    };

    expect(offers(state, setActiveCardAction)).toEqual({activeCard: 1});
  });

  it('should load offers', () => {
    const testOffers = [TEST_OFFER, TEST_OFFER];

    const state = {
      city: 'Amsterdam',
      offers: [],
      filteredOffers: [],
      isDataLoaded: false,
    };

    const loadOffersAction = {
      type: ActionType.LOAD_OFFERS,
      payload: testOffers,
    };

    expect(offers(state, loadOffersAction))
      .toEqual({city: 'Amsterdam', offers: adaptOffers(testOffers), isDataLoaded: true,
        filteredOffers: adaptOffers(testOffers).filter(({city}) => city.name === state.city)});
  });

  it('should load offers near', () => {
    const testOffers = [TEST_OFFER, TEST_OFFER];
    const state = {offersNear: []};

    const loadOffersNearByAction = {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: testOffers,
    };

    expect(offers(state, loadOffersNearByAction))
      .toEqual({offersNear: adaptOffers(testOffers)});
  });

  it('should update offers', () => {
    const testOffers = [TEST_OFFER, TEST_OFFER];

    const state = {
      city: 'Amsterdam',
      offers: testOffers,
      filteredOffers: testOffers,
      offersNear: testOffers,
    };

    const updateOffersAction = {
      type: ActionType.UPDATE_OFFERS,
      payload: TEST_OFFER,
    };

    expect(offers(state, updateOffersAction))
      .toEqual({city: 'Amsterdam', offers: updateAllOffers(state.offers, adaptOffer(TEST_OFFER)),
        filteredOffers: updateAllOffers(state.offers, adaptOffer(TEST_OFFER)).filter(({city}) => city.name === state.city),
        offersNear: updateAllOffers(state.offersNear, adaptOffer(TEST_OFFER))});
  });

  it('should load favorite offers', () => {
    const testOffers = [TEST_OFFER, TEST_OFFER];
    const state = {favoriteOffers: []};

    const loadFavoriteOffersAction = {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: testOffers,
    };

    expect(offers(state, loadFavoriteOffersAction)).toEqual({favoriteOffers: adaptOffers(testOffers)});
  });
});
