import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header/header';
import ReviewList from '../Review/review-list';
import ReviewForm from '../Review-form/review-form';
import Map from '../Map/map';
import NearPlacesList from '../Near-places/near-places-list';
import NotFound from '../Not-found/not-found';
import reviewsPropTypes from '../Review/reviews.prop';
import offerPropTypes from '../Card/offer.prop';
import offersPropTypes from '../Cities/offers.prop';
import { fetchOneOffer, fetchOffersNearBy, fetchComments } from '../../store/api-action';
import { AuthorizationStatus } from '../../const';

function Room({ authorizationStatus, offer, offersNear, reviews, loadDataById }) {
  const { id } = useParams();
  const MAX_IMG_FOR_GALLERY = 6;

  useEffect(() => {
    loadDataById(id);
  }, [id, loadDataById]);

  if (!offer) {
    return <NotFound />;
  }

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                offer.images.slice(0, MAX_IMG_FOR_GALLERY).map((img) => (
                  <div className="property__image-wrapper" key={img}>
                    <img className="property__image" src={img} alt="studio" />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                offer.isPremium && (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>)
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <button
                  className={`property__bookmark-button button ${offer.isFavorite ? 'property__bookmark-button--active' : ''}`}
                  type="button"
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${offer.rating * 20}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    offer.goods.map((good) => (
                      <li className="property__inside-item" key={good}>
                        {good}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offer.host.name}
                  </span>
                  {
                    offer.host.isPro &&
                      <span className="property__user-status">
                      Pro
                      </span>
                  }
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewList reviews={reviews} />
                {authorizationStatus === AuthorizationStatus.AUTH && <ReviewForm />}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map isFromOneOffer />
          </section>
        </section>
        <div className="container">
          <NearPlacesList offers={offersNear} />
        </div>
      </main>
    </div>
  );
}

Room.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  reviews: reviewsPropTypes,
  offersNear: offersPropTypes,
  offer: offerPropTypes,
  loadDataById: PropTypes.func.isRequired,
};

const mapStateToProps = ({ authorizationStatus, offer, offersNear, reviews }) => ({
  authorizationStatus,
  offer,
  offersNear,
  reviews,
});

const mapDispatchToProps = (dispatch) => ({
  loadDataById(id) {
    dispatch(fetchOneOffer(id));
    dispatch(fetchOffersNearBy(id));
    dispatch(fetchComments(id));
  },
});

export { Room };
export default connect(mapStateToProps, mapDispatchToProps)(Room);
