import React, { useState } from 'react';
import ReviewStar from './review-star';

function ReviewForm() {
  const [review, setReview] = useState('');

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          [
            {stars: 5, title: 'perfect'},
            {stars: 4, title: 'good'},
            {stars: 3, title: 'not bad'},
            {stars: 2, title: 'badly'},
            {stars: 1, title: 'terrible'},
          ].map(({ stars, title }) => <ReviewStar key={title} stars={stars} title={title} />)
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
