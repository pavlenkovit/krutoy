import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import css from './Cart.module.scss';

class Cart extends PureComponent {
  state = { isActive: false };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.count < this.props.count) {
      this.setState({ isActive: true });
      setTimeout(() => {
        this.setState({ isActive: false });
      }, 500);
    }
  }

  render() {
    const { count, isCart, menuIsActive } = this.props;
    const { isActive } = this.state;

    let color = isCart ? '#8693AB' : '#fff';
    color = menuIsActive ? '#A0AEB9' : color;
    const classesCart = cn(css.container, {
      [css.container_cartMode]: isCart,
      [css.container_cartFull]: count > 0,
      [css.container_menuIsActive]: menuIsActive,
    });

    if (count > 0) {
      color = '#000';
    }

    return (
      <div className={classesCart}>
        <div className={cn(css.count, { [css.count_active]: isActive })}>{count}</div>
        <svg className={css.highlight} viewBox="0 0 25 6">
          <path d="M1.573 2C5.63 3.644 9.31 4.466 12.613 4.466c3.304 0 6.633-.822 9.988-2.466" stroke={color} strokeWidth="3" fill="none" fillRule="evenodd" strokeLinecap="round" />
        </svg>
      </div>
    );
  }
}

Cart.propTypes = {
  count: PropTypes.number.isRequired,
  isCart: PropTypes.bool.isRequired,
  menuIsActive: PropTypes.bool.isRequired,
};

export default Cart;
