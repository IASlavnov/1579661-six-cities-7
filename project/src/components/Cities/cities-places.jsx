import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';
import SortForm from '../Sort-form/sort-form';
import Card from '../Card/card';
import offersPropTypes from './offers.prop';
import { PlaceType } from '../../const';
import { setSort } from '../../utils/sort';

function CitiesPlaces({ filteredOffers, city, sortType, setActiveCard }) {
  const offersForSort = filteredOffers.slice();

  useEffect(() => {
    setSort(offersForSort, sortType);
  }, [offersForSort, filteredOffers, sortType]);

  const cards = offersForSort.map((offer) => (
    <Card
      key={offer.id}
      offer={offer}
      onMouseEnter={() => setActiveCard(offer.id)}
      onMouseLeave={() => setActiveCard()}
      placeType={PlaceType.MAIN}
    />
  ));

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offersForSort.length} places to stay in {city}</b>
      <SortForm />
      <div className="cities__places-list places__list tabs__content">
        {cards}
      </div>
    </section>
  );
}

CitiesPlaces.propTypes = {
  filteredOffers: offersPropTypes,
  city: PropTypes.string.isRequired,
  sortType: PropTypes.string.isRequired,
  setActiveCard: PropTypes.func.isRequired,
};

const mapStateToProps = ({ city, filteredOffers, sortType }) => ({
  city,
  filteredOffers,
  sortType,
});

const mapDispatchToProps = {
  setActiveCard: ActionCreator.setActiveCard,
};

export { CitiesPlaces };
export default connect(mapStateToProps, mapDispatchToProps)(CitiesPlaces);
