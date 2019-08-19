import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import priceFormat from '../../../../../../utils/priceFormat';
import Button from '../../../../../../components/Button';
import css from './Product.module.scss';

class Product extends PureComponent {
  addToCart = () => {
    const { item, addToCart, history } = this.props;
    addToCart({ ...item, type: 'accessory', count: 1 }, () => {
      history.push('/cart/1');
    });
  };

  render() {
    const { item, products } = this.props;
    const { id, name, price, img } = item;

    const hasInCart = products.find(product => product.id === id);

    return (
      <div className={css.container}>
        <Link href={`/accessory/${id}`}>
          <a className={css.link}>
            {img && <img className={css.img} src={img} alt="" />}
          </a>
        </Link>
        <Link href={`/accessory/${id}`}>
          <a className={css.titleLink}>
            <h3 className={css.title}>{name}</h3>
          </a>
        </Link>
        <div className={css.price}>{priceFormat(price)}</div>
        <div className={css.buttonLarge}>
          <Button w100 handleClick={this.addToCart} href="/cart/1">Купить сейчас</Button>
        </div>
        <button className={css.buttonSmall} onClick={this.addToCart}>
          {hasInCart ? 'Перейти' : 'Добавить'} в&nbsp;корзину
        </button>
      </div>
    );
  }
}

Product.propTypes = {
  item: PropTypes.object.isRequired,
  products: PropTypes.array,
  addToCart: PropTypes.func,
  history: PropTypes.object,
};

export default Product;
