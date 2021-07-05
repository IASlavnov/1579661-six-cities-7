import React from 'react';
import ReviewItem from './review-item';
import reviewsPropTypes from './reviews.prop';

function ReviewList({ reviews }) {
  const reviewItems = reviews.map((review) => <ReviewItem review={review} key={review.id} />);

  return (
    <ul className="reviews__list">
      {reviewItems}
    </ul>
  );
}

ReviewList.propTypes = {
  reviews: reviewsPropTypes,
};

export default ReviewList;
