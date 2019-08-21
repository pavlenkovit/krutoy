import React from 'react';
import PropTypes from 'prop-types';

const SizesIcon = ({ customClass }) => {
  return (
    <svg className={customClass} viewBox="0 0 26 26">
      <path d="M18.923 21.88V20a1 1 0 0 1 1.448-.895l4.764 2.382a1 1 0 0 1 0 1.789l-4.764 2.382a1 1 0 0 1-1.448-.895v-1.881H7.448a4.5 4.5 0 0 1-4.5-4.5v-11H1.066a1 1 0 0 1-.894-1.448L2.554 1.17a1 1 0 0 1 1.789 0l2.382 4.764a1 1 0 0 1-.895 1.448H3.948v11a3.5 3.5 0 0 0 3.5 3.5h11.475z" fill="#FFF" fillRule="nonzero" />
    </svg>
  );
};

SizesIcon.propTypes = {
  customClass: PropTypes.string,
};

export default SizesIcon;
