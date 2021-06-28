import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../Home-page/home-page';
import SignIn from '../Sign-In/sign-in';
import Favorites from '../Favorites/favorites';
import Room from '../Room/room';
import NotFound from '../Not-found/not-found';
import { AppRoute } from '../../const';
import offersPropTypes from '../Cities/offers.prop';

function App({ offers, offersCount }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.ROOT} exact>
          <HomePage
            offers={offers}
            offersCount={offersCount}
          />
        </Route>
        <Route path={AppRoute.SIGNIN} exact>
          <SignIn />
        </Route>
        <Route path={AppRoute.FAVORITES} exact>
          <Favorites
            offers={offers}
          />
        </Route>
        <Route path={AppRoute.ROOM} exact>
          <Room />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: offersPropTypes,
  offersCount: PropTypes.number.isRequired,
};

export default App;
