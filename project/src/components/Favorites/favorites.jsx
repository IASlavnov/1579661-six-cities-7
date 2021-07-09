import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { connect } from 'react-redux';
import Header from '../Header/header';
import FavoritesList from './favorites-list';
import offersPropTypes from '../Cities/offers.prop';

function Favorites({ offers }) {
  const favoriteOffers = offers.filter(({ isFavorite }) => isFavorite);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <FavoritesList offers={favoriteOffers} />
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.ROOT}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

Favorites.propTypes = {
  offers: offersPropTypes,
};

const mapStateToProps = ({ offers }) => ({
  offers,
});

export { Favorites };
export default connect(mapStateToProps, null)(Favorites);
