import React from 'react';
import PropTypes from 'prop-types';

const InstargamIcon = ({ color }) => {
  return (
    <svg viewBox="0 0 26 26">
      <g fill={color} fillRule="nonzero">
        <path d="M17.811 0H8.096A8.097 8.097 0 0 0 0 8.096v9.715a8.097 8.097 0 0 0 8.096 8.096h9.715a8.097 8.097 0 0 0 8.096-8.096V8.096A8.097 8.097 0 0 0 17.811 0zm5.667 17.811a5.673 5.673 0 0 1-5.667 5.667H8.096a5.673 5.673 0 0 1-5.667-5.667V8.096a5.673 5.673 0 0 1 5.667-5.667h9.715a5.673 5.673 0 0 1 5.667 5.667v9.715z" />
        <path d="M12.954 6.477a6.477 6.477 0 1 0 0 12.954 6.477 6.477 0 0 0 0-12.954zm0 10.525a4.054 4.054 0 0 1-4.048-4.048 4.053 4.053 0 0 1 4.048-4.048 4.053 4.053 0 0 1 4.048 4.048 4.054 4.054 0 0 1-4.048 4.048z" />
        <circle cx="19.916" cy="5.991" r="1" />
      </g>
    </svg>
  );
};

InstargamIcon.propTypes = {
  color: PropTypes.string,
};

export default InstargamIcon;
