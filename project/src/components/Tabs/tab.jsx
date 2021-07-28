import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { changeCity, setOffers } from '../../store/action';
import { Link } from 'react-router-dom';
import { getCity } from '../../store/offers/selectors';

function Tab({ tab }) {
  const city = useSelector(getCity);

  const dispatch = useDispatch();
  const onTabClick = (c) => {
    dispatch(changeCity(c));
    dispatch(setOffers(c));
  };

  return (
    <li className="locations__item">
      <Link
        className={`locations__item-link tabs__item ${tab === city ? 'tabs__item--active' : ''}`}
        to={'/'}
        onClick={() => onTabClick(tab)}
      >
        <span>{tab}</span>
      </Link>
    </li>
  );
}

Tab.propTypes = {
  tab: PropTypes.string.isRequired,
};

export default Tab;
