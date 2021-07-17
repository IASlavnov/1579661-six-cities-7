import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';
import SortForm from '../Sort-form/sort-form';
import Card from '../Card/card';
import offersPropTypes from './offers.prop';
import { PlaceType } from '../../const';
import { setSort } from '../../utils/sort';

function CitiesPlaces({ filteredOffers, city, setActiveCard }) {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{filteredOffers.length} places to stay in {city}</b>
      <SortForm />
      <div className="cities__places-list places__list tabs__content">
        {
          filteredOffers.map((offer) => (
            <Card
              key={offer.id}
              offer={offer}
              onMouseEnter={() => setActiveCard(offer.id)}
              onMouseLeave={() => setActiveCard()}
              placeType={PlaceType.MAIN}
            />
          ))
        }
      </div>
    </section>
  );
}

CitiesPlaces.propTypes = {
  filteredOffers: offersPropTypes,
  city: PropTypes.string.isRequired,
  setActiveCard: PropTypes.func.isRequired,
};

const mapStateToProps = ({ city, filteredOffers, sortType }) => ({
  city,
  filteredOffers: setSort(filteredOffers.slice(), sortType),
  sortType,
});

const mapDispatchToProps = {
  setActiveCard: ActionCreator.setActiveCard,
};

export { CitiesPlaces };
export default connect(mapStateToProps, mapDispatchToProps)(CitiesPlaces);
