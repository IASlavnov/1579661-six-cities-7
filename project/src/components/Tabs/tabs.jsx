import React from 'react';
import PropTypes from 'prop-types';
import Tab from './tab';

function Tabs({ cities }) {
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {
              cities.map((city) => <Tab key={city} tab={city} />)
            }
          </ul>
        </section>
      </div>
    </>
  );
}

Tabs.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};


export default Tabs;
