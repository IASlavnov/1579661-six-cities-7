import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { AuthorizationStatus } from '../../const';
import NotFound from './not-found';

let history = null;
let store = null;
let fakeNotFound = null;

describe('Component: NotFound', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    const createFakeStore = configureStore({});
    store = createFakeStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
    });

    fakeNotFound = (
      <Provider store={store}>
        <Router history={history}>
          <NotFound />
        </Router>
      </Provider>
    );
  });

  it('should render correctly', () => {
    render(fakeNotFound);

    expect(screen.getByText(/404. Page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/Вернуться на главную/i)).toBeInTheDocument();
  });
});
