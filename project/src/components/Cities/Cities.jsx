import React from 'react';
import CitiesPlaces from './cities-places';
import CitiesMap from './cities-map';
import { offersPropTypes } from '../../utils/prop-types';

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

Cities.propTypes = offersPropTypes;

export default Cities;
