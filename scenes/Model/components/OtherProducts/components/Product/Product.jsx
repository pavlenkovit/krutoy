import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Router from 'next/router';
import priceFormat from '../../../../../../utils/priceFormat';
import Button from '../../../../../../components/Button';

import css from './Product.module.scss';

const Product = ({ item, products, addToCart }) => {
  const { id, name, price, img } = item;
  const handleClick = () => {
    addToCart({ ...item, type: 'accessory' }, () => {
      Router.push('/cart/[step]', '/cart/1').then(() => window.scrollTo(0, 0));
    });
  };
  const hasInCart = products.find(product => product.id === id);

  return (
    <div className={css.container}>
      <Link href="/accessory/[id]" as={`/accessory/${id}`}>
        <a className={css.link}>
          {img && <img className={css.img} src={img} alt="" />}
        </a>
      </Link>
      <Link href="/accessory/[id]" as={`/accessory/${id}`}>
        <a className={css.titleLink}>
          <h3 className={css.title}>{name}</h3>
        </a>
      </Link>
      <div className={css.price}>{priceFormat(price)}</div>
      <div className={css.buttonLarge}>
        <Button w100 handleClick={handleClick} href="/cart/[step]" as="/cart/1">Купить сейчас</Button>
      </div>
      <button className={css.buttonSmall} onClick={handleClick}>
        {hasInCart ? 'Перейти' : 'Добавить'} в&nbsp;корзину
      </button>
    </div>
  );
};

Product.propTypes = {
  item: PropTypes.object.isRequired,
  products: PropTypes.array,
  addToCart: PropTypes.func,
};

export default Product;
