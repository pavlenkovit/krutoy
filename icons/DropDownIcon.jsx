import React from 'react';
import PropTypes from 'prop-types';

const DropDownIcon = ({ customClass }) => {
  return (
    <svg className={customClass} viewBox="0 0 13 7">
      <path d="M12.089.953L6.544 6.498 1 .953" stroke="#000" fill="none" fillRule="evenodd" />
    </svg>
  );
};

DropDownIcon.propTypes = {
  color: PropTypes.string,
  customClass: PropTypes.string,
};

export default DropDownIcon;
