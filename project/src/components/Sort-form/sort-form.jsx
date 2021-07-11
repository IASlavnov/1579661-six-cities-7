import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';
import PropTypes from 'prop-types';
import { sortTypes } from '../../const';

function SortForm({ sortType, setSortType }) {
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
              onClick={() => setSortType(item)}
            >
              {item}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

SortForm.propTypes = {
  sortType: PropTypes.string.isRequired,
  setSortType: PropTypes.func.isRequired,
};

const mapStateToProps = ({ sortType }) => ({
  sortType,
});

const mapDispatchToProps = {
  setSortType: ActionCreator.setSortType,
};

export { SortForm };
export default connect(mapStateToProps, mapDispatchToProps)(SortForm);
