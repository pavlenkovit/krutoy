import React from 'react';
import PropTypes from 'prop-types';
import css from './IncrementButton.module.scss';

const IncrementButton = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className={css.button}>
      <svg className={css.svg} viewBox="0 0 15 15">
        <path d="M7.5 7.5h6.884H7.5v6.884V7.5zm0 0V.59 7.5H.59 7.5z" stroke="#000" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
};

IncrementButton.propTypes = {
  handleClick: PropTypes.func,
};

export default IncrementButton;
