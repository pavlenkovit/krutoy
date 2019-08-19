import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import css from './Accessory.module.scss';

import priceFormat from '../../utils/priceFormat';
import Button from '../../components/Button';
import Gallery from './components/Gallery';
import ContentWrapper from '../../components/ContentWrapper';
import AccessoriesLink from './components/AccessoriesLink';

class Accessory extends PureComponent {
  state = { isScrolled: false };

  componentDidMount() {
    const { changePage } = this.props;
    changePage('/accessories');

    window.addEventListener('scroll', this.stickyButtons);
  }

  componentWillUnmount() {
    const { changePage } = this.props;
    changePage(null);

    window.removeEventListener('scroll', this.stickyButtons);
  }

  addToCart = () => {
    const { addToCart, history, accessory } = this.props;

    addToCart({ ...accessory, img: accessory.preview, type: 'accessory', count: 1 }, () => {
      history.push('/cart/1');
    });
  };

  stickyButtons = () => {
    this.setState({ isScrolled: window.scrollY > 20 && window.scrollY < document.body.clientHeight - window.innerHeight - 20 });
  };

  render() {
    const { isScrolled } = this.state;
    const { products, isMobile, accessory } = this.props;

    const hasInCart = products.find(product => product.id === accessory.id);

    const { name, description, price, gallery, preview } = accessory;

    const buttonGroupClasses = cn(css.buttonGroup, {
      [css.buttonGroup_fixed]: isScrolled,
    });

    return (
      <div className={css.container}>
        <div className={css.row}>
          <div className={cn(css.col, css.col_product)}>
            {isMobile && (
            <h1 className={css.title}>
              {name}
              <AccessoriesLink />
            </h1>
            )}
            {isMobile && <div className={css.price}>{priceFormat(price)}</div>}
            <Gallery items={gallery} img={preview} />
          </div>
          <div className={cn(css.col, css.col_info)}>
            <div className={css.info}>
              {!isMobile && (
              <h1 className={css.title}>
                {name}
                <AccessoriesLink />
              </h1>
              )}
              {!isMobile && <div className={css.price}>{priceFormat(price)}</div>}
              <div className={buttonGroupClasses}>
                <div className={css.button}>
                  <Button withBorder w100 handleClick={this.addToCart}>{hasInCart ? 'Перейти' : 'Добавить'} <br />в корзину</Button>
                </div>
                <div className={css.button}>
                  <Button w100 handleClick={this.addToCart} href="/cart/1">Купить сейчас</Button>
                </div>
              </div>
              <div className={css.desc}>
                <ContentWrapper content={description} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Accessory.propTypes = {
  accessory: PropTypes.object,
  addToCart: PropTypes.func.isRequired,
};

export default Accessory;
