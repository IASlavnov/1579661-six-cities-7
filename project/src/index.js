import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { createApi } from './services/api';
import { Provider } from 'react-redux';
import App from './components/App/app';
import rootReducer from './store/root-reducer';
import { checkAuth, fetchOffers } from './store/api-action';
import { requireAuthorization } from './store/action';
import { AuthorizationStatus } from './const';
import { redirect } from './store/middlewares/redirect';

const api = createApi(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuth());
store.dispatch(fetchOffers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
