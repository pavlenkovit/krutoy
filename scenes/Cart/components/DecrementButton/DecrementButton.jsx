import React from 'react';
import PropTypes from 'prop-types';

import css from './DecrementButton.module.scss';

const DecrementButton = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className={css.button}>
      <svg className={css.svg} viewBox="0 0 15 2">
        <path d="M14.384 1.056H.591" stroke="#000" fill="none" fillRule="evenodd" strokeLinecap="round" />
      </svg>
    </button>
  );
};

DecrementButton.propTypes = {
  handleClick: PropTypes.func,
};

export default DecrementButton;
