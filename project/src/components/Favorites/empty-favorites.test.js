import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import EmptyFavorites from './empty-favorites';

describe('Component: EmptyFavorites', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <EmptyFavorites />
      </Router>,
    );
    const headerElement = getByText('Favorites (empty)');
    const textElement = getByText('Nothing yet saved.');
    const descriptionElement = getByText('Save properties to narrow down search or plan your future trips.');

    expect(headerElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});
