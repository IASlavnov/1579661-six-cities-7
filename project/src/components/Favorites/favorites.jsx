import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../Header/header';
import FavoritesList from './favorites-list';
import EmptyFavorites from './empty-favorites';
import { getFavoriteOffers } from '../../store/offers/selectors';
import { fetchFavoriteOffers } from '../../store/api-action';

function Favorites() {
  const favoriteOffers = useSelector(getFavoriteOffers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteOffers());
  }, [dispatch]);

  return (
    <div className="page">
      <Header />

      <main
        className={`page__main page__main--favorites ${favoriteOffers.length ? '' : 'page__main--favorites-empty'}`}
      >
        <div className="page__favorites-container container">
          {
            favoriteOffers.length ?
              <FavoritesList offers={favoriteOffers} /> :
              <EmptyFavorites />
          }
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

export default Favorites;
