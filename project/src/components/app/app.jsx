import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../Home-page/home-page';
import SignIn from '../Sign-In/sign-in';
import Favorites from '../Favorites/favorites';
import Room from '../Room/room';
import NotFound from '../Not-found/not-found';
import { AppRoute } from '../../const';
import { propTypes } from '../../utils/prop-types';

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
          <Favorites />
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

App.propTypes = propTypes;

export default App;
