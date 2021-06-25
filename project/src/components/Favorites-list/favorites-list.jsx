import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteCard from '../Favorite-card/favorite-card';
import offersPropTypes from '../Cities/offers.prop';

function FavoritesList({ offers }) {
  const cities = offers.map((offer) => offer.city.name);
  const uniqueCities = Array.from(new Set(cities));

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          uniqueCities.map((city) => (
            <li className="favorites__locations-items" key={city}>
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <Link className="locations__item-link" to={`/${city}`}>
                    <span>{city}</span>
                  </Link>
                </div>
              </div>
              <div className="favorites__places">
                {
                  offers.map((offer) => <FavoriteCard offer={offer} key={offer.id} />)
                }
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  );
}

FavoritesList.propTypes = {
  offers: offersPropTypes,
};

export default FavoritesList;
