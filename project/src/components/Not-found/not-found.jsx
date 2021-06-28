import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Header from '../Header/header';

function NotFound() {
  return (
    <>
      <Header />

      <section>
        <h1>404. Page not found</h1>
        <Link to={AppRoute.ROOT}>Вернуться на главную</Link>
      </section>
    </>
  );
}

export default NotFound;
