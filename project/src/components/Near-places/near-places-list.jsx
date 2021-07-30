import React from 'react';
import Card from '../Card/card';
import { useSelector } from 'react-redux';
import { getOffersNear } from '../../store/offers/selectors';
import { PlaceType } from '../../const';

function NearPlacesList() {
  const offers = useSelector(getOffersNear);

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((offer) => <Card key={offer.id} offer={offer} placeType={PlaceType.NEAR_PLACES} /> )}
      </div>
    </section>
  );
}

export default NearPlacesList;
