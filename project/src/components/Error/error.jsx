import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setError, redirectToRoute } from '../../store/action';
import { AppRoute } from '../../const';

function Error({ message }) {
  const dispatch = useDispatch();
  const handleErrorClose = () => {
    dispatch(setError(null));
    dispatch(redirectToRoute(AppRoute.ROOT));
  };

  return (
    <>
      <p>Error...</p>
      <p>{message}</p>
      <button
        onClick={handleErrorClose}
        type='button'
      >
        Назад
      </button>
    </>
  );
}

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
