import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { AuthorizationStatus } from '../../const';
import Header from './header';

let history = null;
let store = null;
let fakeHeader = null;

describe('Component: Header', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});
    store = createFakeStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH, email: 'test@test.ru'},
    });

    fakeHeader = (
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>
    );
  });

  it('should render Header correctly', () => {
    render(fakeHeader);

    expect(screen.getByText(/test@test.ru/i)).toBeInTheDocument();
  });
});
