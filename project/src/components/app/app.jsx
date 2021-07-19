import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Router as BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../Private-route/private-route';
import HomePage from '../Home-page/home-page';
import SignIn from '../Sign-In/sign-in';
import Favorites from '../Favorites/favorites';
import Room from '../Room/room';
import NotFound from '../Not-found/not-found';
import Spinner from '../Spinner/spinner';
import { AppRoute } from '../../const';
import { isCheckedAuth } from '../../utils/auth';
import browserHistory from '../../browser-history';

function App({ isDataLoaded, authorizationStatus }) {
  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return <Spinner />;
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

App.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({ isDataLoaded, authorizationStatus }) => ({
  isDataLoaded,
  authorizationStatus,
});

export { App };
export default connect(mapStateToProps)(App);
