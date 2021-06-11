import React from 'react';

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
                <a className="locations__item-link tabs__item" href={`/${city}`}>
                  <span>{city}</span>
                </a>
              </li>
            ))};
          </ul>
        </section>
      </div>
    </>
  );
}

export default Tabs;
