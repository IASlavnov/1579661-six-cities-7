import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Tab({ city }) {
  return (
    <li className="locations__item">
      <Link className="locations__item-link tabs__item" to={`/${city}`}>
        <span>{city}</span>
      </Link>
    </li>
  );
}

Tab.propTypes = {
  city: PropTypes.string.isRequired,
};

export default Tab;
