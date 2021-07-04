import React from 'react';
import Card from '../Card/card';
import { PlaceType } from '../../const';
import offersPropTypes from '../Cities/offers.prop';

function NearPlacesList({ offers }) {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((offer) => <Card key={offer.id} offer={offer} placeType={PlaceType.NEAR_PLACES} /> )}
      </div>
    </section>
  );
}

NearPlacesList.propTypes = {
  offers: offersPropTypes,
};

export default NearPlacesList;
