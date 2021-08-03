import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ReviewStar({ stars, title, handleInputChange }) {
  const [value, setValue] = useState(0);

  return (
    <>
      <input
        onChange={(e) => {
          handleInputChange(e.target.value);
          setValue(+e.target.value);
        }}
        className="form__rating-input visually-hidden"
        name="rating"
        value={stars}
        id={`${stars}-stars`}
        type="radio"
        checked={value === stars}
      />
      <label htmlFor={`${stars}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

ReviewStar.propTypes = {
  stars: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default ReviewStar;
