import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSortType } from '../../store/action';
import { sortTypes } from '../../const';
import { getSortType } from '../../store/offers/selectors';

function SortForm() {
  const sortType = useSelector(getSortType);

  const dispatch = useDispatch();
  const handleSetSortType = (sType) => {
    dispatch(setSortType(sType));
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}
      >
        {
          sortTypes.map((item) => (
            <li
              className={`places__option ${item === sortType ? 'places__option--active' : ''}`}
              key={item}
              tabIndex="0"
              onClick={() => handleSetSortType(item)}
            >
              {item}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export default SortForm;
