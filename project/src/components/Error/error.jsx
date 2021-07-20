import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';
import { AppRoute } from '../../const';

function Error({ message, onClose }) {
  return (
    <>
      <p>Error...</p>
      <p>{message}</p>
      <button
        onClick={onClose}
        type='button'
      >
        Назад
      </button>
    </>
  );
}

Error.propTypes = {
  message: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onClose() {
    dispatch(ActionCreator.setError(null));
    dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT));
  },
});

export { Error };
export default connect(null, mapDispatchToProps)(Error);
