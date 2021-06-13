import PropTypes from 'prop-types';

export const offersPropTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isPremium: PropTypes.bool.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ),
};

export const propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isPremium: PropTypes.bool.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ),
  offersCount: PropTypes.number.isRequired,
};
