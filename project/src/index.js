import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  CARDS_COUNT: 5,
  RENT_OFFERS: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      cardsCount={Setting.CARDS_COUNT}
      rentOffers={Setting.RENT_OFFERS}
    />
  </React.StrictMode>,
  document.getElementById('root'));
