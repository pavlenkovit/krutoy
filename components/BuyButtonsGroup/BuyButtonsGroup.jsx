import React, { PureComponent } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';

import css from './BuyButtonsGroup.module.scss';

class BuyButtonsGroup extends PureComponent {
  state = { isScrolled: false };

  componentDidMount() {
    window.addEventListener('scroll', this.stickyButtons);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.stickyButtons);
  }

  stickyButtons = () => {
    this.setState({ isScrolled: window.scrollY > 15 && window.scrollY < document.body.clientHeight - window.innerHeight - 15 });
  };

  render() {
    const { handleClick, hasInCart } = this.props;
    const { isScrolled } = this.state;

    return (
      <div className={cn(css.buttonGroup, { [css.buttonGroup_fixed]: isScrolled })}>
        <div className={css.button}>
          <Button withBorder w100 handleClick={handleClick}>{hasInCart ? 'Перейти' : 'Добавить'}
            <br />в корзину</Button>
        </div>
        <div className={css.button}>
          <Button w100 handleClick={handleClick} href="/cart[step]" as="/cart/1">Купить сейчас</Button>
        </div>
      </div>
    );
  }
}

BuyButtonsGroup.propTypes = {
  handleClick: PropTypes.func.isRequired,
  hasInCart: PropTypes.bool.isRequired,
};

export default BuyButtonsGroup;
