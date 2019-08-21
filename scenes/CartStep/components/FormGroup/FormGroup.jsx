import React from 'react';
import PropTypes from 'prop-types';

import css from './FormGroup.module.scss';

const FormGroup = ({ title, children }) => {
  return (
    <div className={css.formGroup}>
      {title && <div className={css.title}>{title}</div>}
      {children}
    </div>
  );
};

FormGroup.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default FormGroup;
