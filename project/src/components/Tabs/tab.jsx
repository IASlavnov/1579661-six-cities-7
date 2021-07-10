import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';
import {Link} from 'react-router-dom';

function Tab({ tab, city, changeCity, setOffers }) {
  return (
    <li className="locations__item">
      <Link
        className={`locations__item-link tabs__item ${tab === city ? 'tabs__item--active' : ''}`}
        to={'/'}
        onClick={() => {
          changeCity(tab);
          setOffers(tab);
        }}
      >
        <span>{tab}</span>
      </Link>
    </li>
  );
}

Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  setOffers: PropTypes.func.isRequired,
};

const mapStateToProps = ({ city }) => ({
  city,
});

const mapDispatchToProps = {
  changeCity: ActionCreator.changeCity,
  setOffers: ActionCreator.setOffers,
};

export { Tab };
export default connect(mapStateToProps, mapDispatchToProps)(Tab);
