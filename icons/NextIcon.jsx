import React from 'react';
import PropTypes from 'prop-types';

const NextIcon = (props) => {
  return (
    <svg className={props.customClass} viewBox="0 0 34 16">
      <g stroke="#000" fill="none" fillRule="evenodd">
        <path d="M.498 8.095H31.91" strokeLinecap="square" />
        <path d="M24.6 1.19l8.536 6.905L24.6 15" />
      </g>
    </svg>
  );
};

NextIcon.propTypes = {
  customClass: PropTypes.string,
};

export default NextIcon;
