import { offer } from './offer';
import { ActionType } from '../action';
import { adaptOffer, adaptComments } from '../../utils/adapter';

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

const TEST_REVIEWS = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: false,
      name: 'Max',
    },
  },
];

describe('Reducer: offer', () => {
  it('without additional parameters should return initial state', () => {
    expect(offer(undefined, {})).toEqual({offer: null, reviews: []});
  });

  it('should load one offer', () => {
    const state = {
      offer: null,
      reviews: [],
    };

    const loadOneOfferAction = {
      type: ActionType.LOAD_ONE_OFFER,
      payload: TEST_OFFER,
    };

    expect(offer(state, loadOneOfferAction))
      .toEqual({offer: adaptOffer(TEST_OFFER), reviews: []});
  });

  it('should load comments for offer', () => {
    const state = {
      offer: null,
      reviews: [],
    };

    const loadCommentsAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: TEST_REVIEWS,
    };

    expect(offer(state, loadCommentsAction))
      .toEqual({offer: null, reviews: adaptComments(TEST_REVIEWS)});
  });
});
