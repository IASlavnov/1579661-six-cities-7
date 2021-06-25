import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/app';
import offers from './mocks/offers';

const OFFERS_COUNT = 312;

ReactDOM.render(
  <React.StrictMode>
    <App
      offers={offers}
      offersCount={OFFERS_COUNT}
    />
  </React.StrictMode>,
  document.getElementById('root'));
