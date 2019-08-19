import React from 'react';
import PropTypes from 'prop-types';

const KeyIcon = (props) => {
  return (
    <svg className={props.customClass} viewBox="0 0 25 30">
      <g stroke="#FFF" fill="none" fillRule="evenodd">
        <path d="M11.44 6.181l-2.976 5.155H3.512L.536 6.18l2.976-5.154h4.952z" />
        <path strokeLinecap="round" d="M23.89 25.932l-4.46 2.575-4.459-2.575" />
        <path d="M6.01 1.042h7.88c5.523 0 10 4.477 10 10v14.616" strokeLinecap="square" />
        <path d="M11.44 6.181h1.99a6 6 0 0 1 6 6v15.355" strokeLinecap="square" />
        <path d="M6.01 11.318h5.97a3 3 0 0 1 3 3v11.34" strokeLinecap="square" />
      </g>
    </svg>
  );
};

KeyIcon.propTypes = {
  customClass: PropTypes.string,
};


export default KeyIcon;
