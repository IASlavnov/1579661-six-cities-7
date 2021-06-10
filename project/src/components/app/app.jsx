import React from 'react';
import PropTypes from 'prop-types';
import HomePage from '../Home-page/Home-page';

function App({ offers, offersCount }) {
  return (
    <HomePage
      offers={offers}
      offersCount={offersCount}
    />
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isPremium: PropTypes.bool.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ) ,
  offersCount: PropTypes.number.isRequired,
};

export default App;
