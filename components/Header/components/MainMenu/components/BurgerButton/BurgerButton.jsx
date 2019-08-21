import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import css from './BurgerButton.module.scss';

const BurgerButton = ({ handleClick, isActive, isCart }) => {
  const classesButton = cn(css.button, {
    [css.button_cartMode]: isCart,
    [css.button_active]: isActive,
  });

  return (
    <button onClick={handleClick} className={classesButton}>
      <div className={cn(css.line, css.line_first)} />
      <div className={cn(css.line, css.line_last)} />
    </button>
  );
};

BurgerButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  isCart: PropTypes.bool.isRequired,
};

export default BurgerButton;
