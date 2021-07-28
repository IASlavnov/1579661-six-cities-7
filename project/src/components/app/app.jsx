import React from 'react';
import { useSelector } from 'react-redux';
import { Router as BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../Private-route/private-route';
import HomePage from '../Home-page/home-page';
import SignIn from '../Sign-In/sign-in';
import Favorites from '../Favorites/favorites';
import Room from '../Room/room';
import NotFound from '../Not-found/not-found';
import Spinner from '../Spinner/spinner';
import Error from '../Error/error';
import { AppRoute } from '../../const';
import { isCheckedAuth } from '../../utils/auth';
import browserHistory from '../../browser-history';
import { getIsDataLoaded } from '../../store/offers/selectors';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { getError } from '../../store/error/selectors';

function App() {
  const isDataLoaded = useSelector(getIsDataLoaded);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const error = useSelector(getError);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return <Spinner />;
  } else if (error) {
    return <Error message={error} />;
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={AppRoute.SIGNIN} exact>
          <SignIn />
        </Route>
        <PrivateRoute
          path={AppRoute.ROOT}
          exact
          render={() => <HomePage />}
        />
        <PrivateRoute
          path={AppRoute.FAVORITES}
          exact
          render={() => <Favorites />}
        />
        <PrivateRoute
          path={AppRoute.ROOM}
          exact
          render={() => <Room />}
        />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
