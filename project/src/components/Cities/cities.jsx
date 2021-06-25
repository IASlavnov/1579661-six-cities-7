import React from 'react';
import PropTypes from 'prop-types';
import CitiesPlaces from './cities-places';
import CitiesMap from './cities-map';
import offersPropTypes from './offers.prop';

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
  offers: offersPropTypes,
  offersCount: PropTypes.number.isRequired,
};

export default Cities;
