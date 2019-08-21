import React from 'react';
import PropTypes from 'prop-types';

const MaterialIcon = ({ customClass }) => {
  return (
    <svg className={customClass} viewBox="0 0 26 26">
      <g fill="#FFF" fillRule="nonzero">
        <path d="M.333 20.333h1a1 1 0 0 0 .382.786l3.773 2.97a1 1 0 0 0 .619.215h17.226a1 1 0 0 0 1-1V5.98a1 1 0 0 0-.22-.627l-2.958-3.675a1 1 0 0 0-.78-.373v-1a2 2 0 0 1 1.559.746l2.957 3.675a2 2 0 0 1 .442 1.254v17.325a2 2 0 0 1-2 2H6.107a2 2 0 0 1-1.238-.429l-3.773-2.97a2 2 0 0 1-.763-1.572zm0 0h1a1 1 0 0 0 .382.786l3.773 2.97a1 1 0 0 0 .619.215h17.226a1 1 0 0 0 1-1V5.98a1 1 0 0 0-.22-.627l-2.958-3.675a1 1 0 0 0-.78-.373v-1a2 2 0 0 1 1.559.746l2.957 3.675a2 2 0 0 1 .442 1.254v17.325a2 2 0 0 1-2 2H6.107a2 2 0 0 1-1.238-.429l-3.773-2.97a2 2 0 0 1-.763-1.572z" />
        <path d="M1.333 1.304v19h19v-19h-19zm0-1h19a1 1 0 0 1 1 1v19a1 1 0 0 1-1 1h-19a1 1 0 0 1-1-1v-19a1 1 0 0 1 1-1z" />
        <path d="M22.432 3.047h1v18.856a1.5 1.5 0 0 1-1.5 1.5H3.226v-1h18.706a.5.5 0 0 0 .5-.5V3.047z" />
      </g>
    </svg>
  );
};

MaterialIcon.propTypes = {
  customClass: PropTypes.string,
};


export default MaterialIcon;
