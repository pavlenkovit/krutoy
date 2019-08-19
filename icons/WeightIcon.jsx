import React from 'react';
import PropTypes from 'prop-types';

const WeightIcon = (props) => {
  return (
    <svg className={props.customClass}  viewBox="0 0 26 28">
      <path d="M.233 26.594L4.134 9.949c.1-.438.447-.705.897-.705h7.228v-2.71c-1.317-.268-2.41-1.62-2.41-3.012C9.85 1.93 11.27.51 12.862.51c1.594 0 3.012 1.42 3.012 3.012 0 1.393-1.092 2.744-2.41 3.012v2.71h7.23c.448 0 .795.266.895.705l3.9 16.645a.838.838 0 0 1-.156.713.84.84 0 0 1-.662.31H1.053a.839.839 0 0 1-.661-.31.838.838 0 0 1-.159-.713zM14.668 3.522a1.81 1.81 0 0 0-1.807-1.807 1.81 1.81 0 0 0-1.807 1.807c0 .996.81 1.807 1.807 1.807a1.81 1.81 0 0 0 1.807-1.807zm9.638 22.89l-3.915-15.963H5.331L1.417 26.412h22.89z" fill="#FFF" fillRule="nonzero" />
    </svg>
  );
};

WeightIcon.propTypes = {
  customClass: PropTypes.string,
};


export default WeightIcon;
