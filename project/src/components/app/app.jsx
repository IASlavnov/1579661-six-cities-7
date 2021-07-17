import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../Home-page/home-page';
import SignIn from '../Sign-In/sign-in';
import Favorites from '../Favorites/favorites';
import Room from '../Room/room';
import NotFound from '../Not-found/not-found';
import Spinner from '../Spinner/spinner';
import { AppRoute } from '../../const';

function App({ isDataLoaded }) {
  if (!isDataLoaded) {
    return <Spinner />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.ROOT} exact>
          <HomePage />
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

App.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoaded: state.isDataLoaded,
});

export { App };
export default connect(mapStateToProps)(App);
