import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import priceFormat from '../../../../../../utils/priceFormat';
import Button from '../../../../../../components/Button';

import css from './ProductAssembly.module.scss';

const ProductAssembly = ({ products, addToCart }) => {
  const handleClick = () => {
    addToCart({ dataId: '999', id: 'assembly', name: 'Наша сборка', price: 500, img: '/static/img/content/our_assembly.svg', type: 'service' });
  };
  const hasInCart = products.find(product => product.dataId === '999');

  return (
    <div className={css.container}>
      <div className={css.imgWrap}>
        <img className={css.img} src="/static/img/content/our_assembly.svg" alt="" />
        <div className={css.info}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <div className={css.decor} />
        </div>
      </div>
      <h3 className={css.title}>Duis aute irure dolor</h3>
      <div className={css.price}>{priceFormat(500)}</div>
      <div className={cn(css.buttonLarge, { [css.buttonLarge_disabled]: hasInCart })}>
        <Button w100 handleClick={handleClick}>{hasInCart ? 'Добавлено' : 'Добавить'}</Button>
      </div>
    </div>
  );
};

ProductAssembly.propTypes = {
  products: PropTypes.array,
  addToCart: PropTypes.func,
};

export default ProductAssembly;
