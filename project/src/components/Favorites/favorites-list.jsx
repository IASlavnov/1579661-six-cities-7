import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteItem from "./favorite-item";
import offersPropTypes from '../Cities/offers.prop';


function FavoritesList({ offers }) {
  const cities = offers.map(({ city }) => city.name);
  const uniqueCities = Array.from(new Set(cities));
  const favoriteItems = uniqueCities.map((city) => <FavoriteItem key={city} city={city} offers={offers} />);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {favoriteItems}
      </ul>
    </section>
  );
}

FavoritesList.propTypes = {
  offers: offersPropTypes,
};

export default FavoritesList;
