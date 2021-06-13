import React from 'react';
import CitiesPlaces from './cities-places';
import CitiesMap from './cities-map';
import { propTypes } from '../../utils/prop-types';

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

Cities.propTypes = propTypes;

export default Cities;
