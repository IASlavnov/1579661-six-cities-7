import React from 'react';
import offersPropTypes from './offers.prop';
import Map from '../Map/map';

function CitiesMap({ offers }) {
  return (
    <div className="cities__right-section">
      <section className="cities__map map">
        <Map offers={offers} />
      </section>
    </div>
  );
}

CitiesMap.propTypes = {
  offers: offersPropTypes,
};

export default CitiesMap;
