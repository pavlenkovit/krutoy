import React from 'react';
import PropTypes from 'prop-types';

const FacebookIcon = ({ color }) => {
  return (
    <svg viewBox="0 0 13 26">
      <path d="M3.505 5.007v3.56H.897v4.352h2.608v12.935h5.357V12.92h3.595s.336-2.087.5-4.37H8.882V5.576c0-.445.584-1.044 1.162-1.044h2.918V.001H8.994C3.372 0 3.504 4.356 3.504 5.006z" fill={color} fillRule="nonzero" />
    </svg>
  );
};

FacebookIcon.propTypes = {
  color: PropTypes.string,
};

export default FacebookIcon;
