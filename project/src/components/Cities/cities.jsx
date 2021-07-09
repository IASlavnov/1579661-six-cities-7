import React from 'react';
import CitiesPlaces from './cities-places';
import CitiesMap from './cities-map';

function Cities() {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <CitiesPlaces />
        <CitiesMap />
      </div>
    </div>
  );
}

export default Cities;
