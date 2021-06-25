import React from 'react';
import { Link } from 'react-router-dom';

const cities =['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

function Tabs() {
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city) => (
              <li className="locations__item" key={city}>
                <Link className="locations__item-link tabs__item" to={`/${city}`}>
                  <span>{city}</span>
                </Link>
              </li>
            ))};
          </ul>
        </section>
      </div>
    </>
  );
}

export default Tabs;
