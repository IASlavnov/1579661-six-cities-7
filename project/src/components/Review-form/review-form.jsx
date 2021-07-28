import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { sendComment } from '../../store/api-action';
import ReviewStar from './review-star';
import { commentIsValid } from '../../utils/comment-valid';

function ReviewForm() {
  const dispatch = useDispatch();
  const submitHandler = (offerId, data) => {
    dispatch(sendComment(offerId, data));
  };

  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const { id } = useParams();

  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        submitHandler(id, {comment: review, rating: rating});
        setReview('');
        setRating(0);
      }}
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          [
            {stars: 5, title: 'perfect'},
            {stars: 4, title: 'good'},
            {stars: 3, title: 'not bad'},
            {stars: 2, title: 'badly'},
            {stars: 1, title: 'terrible'},
          ].map(({ stars, title }) => (
            <ReviewStar
              onChange={(value) => setRating(value)}
              key={title}
              stars={stars}
              title={title}
            />
          ))
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
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!commentIsValid(review, rating)}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
