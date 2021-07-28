import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveCard } from '../../store/action';
import SortForm from '../Sort-form/sort-form';
import Card from '../Card/card';
import { PlaceType } from '../../const';
import { setSort } from '../../utils/sort';
import { getCity, getFilteredOffers, getSortType } from '../../store/offers/selectors';

function CitiesPlaces() {
  const filteredOffers = useSelector(getFilteredOffers);
  const city = useSelector(getCity);
  const sortType = useSelector(getSortType);

  const sortedOffers = setSort(filteredOffers.slice(), sortType);

  const dispatch = useDispatch();
  const onSetActiveCard = (id) => {
    dispatch(setActiveCard(id));
  };

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{sortedOffers.length} places to stay in {city}</b>
      <SortForm />
      <div className="cities__places-list places__list tabs__content">
        {
          sortedOffers.map((offer) => (
            <Card
              key={offer.id}
              offer={offer}
              onMouseEnter={() => onSetActiveCard(offer.id)}
              onMouseLeave={() => onSetActiveCard()}
              placeType={PlaceType.MAIN}
            />
          ))
        }
      </div>
    </section>
  );
}

export default CitiesPlaces;
