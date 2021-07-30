import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useDispatch } from 'react-redux';
import { changeOffers, fetchFavoriteOffers, fetchOneOffer } from '../../store/api-action';
import PropTypes from 'prop-types';
import cardPropTypes from './offer.prop';
import { PlaceCardType } from '../../const';

function Card({offer: { id, isPremium, isFavorite, previewImage, price, rating, title, type },
  onMouseEnter = () => {}, onMouseLeave = () => {}, placeType}) {

  const dispatch = useDispatch();

  const addToFavorite = (offerId, offerStatus) => {
    dispatch(changeOffers(offerId, offerStatus))
      .then(() => {
        dispatch(fetchFavoriteOffers());
        dispatch(fetchOneOffer(offerId));
      });
  };

  return (
    <article
      className={PlaceCardType[placeType].className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      { isPremium ?? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${PlaceCardType[placeType].type}__image-wrapper`}>
        <Link to={`${AppRoute.OFFER}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={PlaceCardType[placeType].width}
            height={PlaceCardType[placeType].height}
            alt="Place"
          />
        </Link>
      </div>
      <div className={PlaceCardType[placeType].classNameInfo}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            onClick={() => addToFavorite(id, !isFavorite)}
            className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.OFFER}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

Card.propTypes = {
  offer: cardPropTypes,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  placeType: PropTypes.string.isRequired,
};

export default Card;
