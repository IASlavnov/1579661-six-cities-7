import React from 'react';
import {Link} from 'react-router-dom';
import Card from '../Card/card';
import PropTypes from 'prop-types';
import offersPropTypes from '../Cities/offers.prop';
import { PlaceType } from '../../const';

function FavoriteItem({ city, offers }) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={`/${city}`}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {
          offers.map((offer) => <Card offer={offer} key={offer.id} placeType={PlaceType.FAVORITES} />)
        }
      </div>
    </li>
  );
}

FavoriteItem.propTypes = {
  city: PropTypes.string.isRequired,
  offers: offersPropTypes,
};

export default FavoriteItem;
