import React from 'react';
import Tab from './tab';

const cities =['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

function Tabs() {
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {
              cities.map((city) => <Tab key={city} city={city} />)
            }
          </ul>
        </section>
      </div>
    </>
  );
}

export default Tabs;
