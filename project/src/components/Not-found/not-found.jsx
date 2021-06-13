import React from 'react';
import Header from '../Header/header';

function NotFound() {
  return (
    <>
      <Header />

      <section>
        <h1>404. Page not found</h1>
        <a href="/">Вернуться на главную</a>
      </section>
    </>
  );
}

export default NotFound;
