import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../Card/card';
import offersPropTypes from './offers.prop';
import { PlaceType } from '../../const';

function CitiesPlaces({ filteredOffers, city }) {
  const [activeCard, setActiveCard] = useState(null);

  const cards = filteredOffers.map((offer) => (
    <Card
      key={offer.id}
      offer={offer}
      onMouseEnter={() => setActiveCard(offer.id)}
      onMouseLeave={() => setActiveCard(0)}
      placeType={PlaceType.MAIN}
    />
  ));

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{filteredOffers.length} places to stay in {city}</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0">
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex="0">Popular</li>
          <li className="places__option" tabIndex="0">Price: low to high</li>
          <li className="places__option" tabIndex="0">Price: high to low</li>
          <li className="places__option" tabIndex="0">Top rated first</li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
        {cards}
      </div>
    </section>
  );
}

CitiesPlaces.propTypes = {
  filteredOffers: offersPropTypes,
  city: PropTypes.string.isRequired,
};

const mapStateToProps = ({ city, filteredOffers }) => ({
  city,
  filteredOffers,
});

export { CitiesPlaces };
export default connect(mapStateToProps, null)(CitiesPlaces);
