import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';

const OFFERS_COUNT = 312;

ReactDOM.render(
  <React.StrictMode>
    <App
      offers={offers}
      offersCount={OFFERS_COUNT}
      reviews={reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));
