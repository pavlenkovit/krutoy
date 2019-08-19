import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import css from './BurgerButton.module.scss';

class BurgerButton extends PureComponent {
  render() {
    const { handleClick, isActive, cartMode } = this.props;
    const classesButton = cn(css.button, {
      [css.button_cartMode]: cartMode,
      [css.button_active]: isActive,
    });

    return (
      <button onClick={handleClick} className={classesButton}>
        <div className={cn(css.line, css.line_first)} />
        <div className={cn(css.line, css.line_last)} />
      </button>
    );
  }
}

BurgerButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  cartMode: PropTypes.bool.isRequired,
};

export default BurgerButton;
