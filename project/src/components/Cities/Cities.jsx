import React from 'react';
import PropTypes from 'prop-types';
import CitiesPlaces from './Cities-places';
import CitiesMap from './Cities-map';

function Cities({ offers, offersCount }) {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <CitiesPlaces
          offers={offers}
          offersCount={offersCount}
        />
        <CitiesMap />
      </div>
    </div>
  );
}

Cities.propTypes = {
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

export default Cities;
