import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/app';

const OFFERS_COUNT = 312;

const offers = [
  {
    id: 1,
    isPremium: true,
    isFavorite: false,
    image: 'img/apartment-01.jpg',
    price: 120,
    rating: 4,
    title: 'Beautiful luxurious apartment at great location',
    type: 'Apartment',
  },
  {
    id: 2,
    isPremium: false,
    isFavorite: true,
    image: 'img/room.jpg',
    price: 80,
    rating: 4,
    title: 'Wood and stone place',
    type: 'Private room',
  },
  {
    id: 3,
    isPremium: false,
    isFavorite: false,
    image: 'img/apartment-02.jpg',
    price: 132,
    rating: 4,
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
  },
  {
    id: 4,
    isPremium: true,
    isFavorite: false,
    image: 'img/apartment-03.jpg',
    price: 180,
    rating: 5,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
  },
  {
    id: 5,
    isPremium: false,
    isFavorite: true,
    image: 'img/room.jpg',
    price: 80,
    rating: 4,
    title: 'Wood and stone place',
    type: 'Private room',
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App
      offers={offers}
      offersCount={OFFERS_COUNT}
    />
  </React.StrictMode>,
  document.getElementById('root'));
