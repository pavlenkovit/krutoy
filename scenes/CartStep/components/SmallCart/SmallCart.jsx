import React from 'react';
import PropTypes from 'prop-types';

import css from './SmallCart.module.scss';

const SmallCart = ({ products, total, deliveryPrice, showPrice }) => {
  return (
    <div className={css.container}>
      <div className={css.products}>
        {products.map((product, idx) => {
          return (
            <div key={idx} className={css.product}>
              <div className={css.info}>
                <div className={css.imgWrap}>
                  <img src={product.img} alt="" />
                </div>
                <div className={css.titleWrap}>
                  <div className={css.productTitle}>
                    {product.type === 'model' && 'Качалка '}{product.name}
                    {product.type !== 'service' && `x ${product.count}`}
                  </div>
                  {product.type !== 'service' && <div className={css.subTitle}>KRUTOY</div>}
                </div>
              </div>
              <div className={css.price}>
                {product.count * product.price}₽
              </div>
            </div>
          );
        })}
      </div>
      <div className={css.otherInfo}>
        <div className={css.line}>
          <div className={css.otherTitle}>Сумма</div>
          <div className={css.otherPrice}>{total}₽</div>
        </div>
        <div className={css.line}>
          <div className={css.otherTitle}>Доставка</div>
          {showPrice
            ? <div className={css.otherPrice}>{deliveryPrice}₽</div>
            : <div className={css.nonPrice}>Расчет на следующем шаге</div>}
        </div>
      </div>
      <div className={css.total}>
        <div className={css.totalTitle}>Итого</div>
        <div className={css.totalPrice}>{total + deliveryPrice}₽</div>
      </div>
    </div>
  );
};

SmallCart.propTypes = {
  products: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  deliveryPrice: PropTypes.number.isRequired,
  showPrice: PropTypes.bool.isRequired,
};

export default SmallCart;
