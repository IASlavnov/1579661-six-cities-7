import React from 'react';
import PropTypes from 'prop-types';
import HomePage from '../home-page/home-page';

function App({ cardsCount, rentOffers }) {
  return (
    <HomePage
      cardsCount={cardsCount}
      rentOffers={rentOffers}
    />
  );
}

App.propTypes = {
  cardsCount: PropTypes.number.isRequired,
  rentOffers: PropTypes.number.isRequired,
};

export default App;
