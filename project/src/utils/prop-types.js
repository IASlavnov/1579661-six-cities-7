import PropTypes from 'prop-types';

const OFFERS_PROP_TYPES = PropTypes.arrayOf(
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
);

export const cardPropTypes = {
  offers: OFFERS_PROP_TYPES,
};

export const offersPropTypes = {
  offers: OFFERS_PROP_TYPES,
  offersCount: PropTypes.number.isRequired,
};
