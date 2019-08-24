import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Router from 'next/router';

import priceFormat from '../../utils/priceFormat';
import Gallery from './components/Gallery';
import ContentWrapper from '../../components/ContentWrapper';
import AccessoriesLink from './components/AccessoriesLink';
import CustomHead from '../../components/CustomHead';
import BuyButtonsGroup from '../../components/BuyButtonsGroup';

import css from './Accessory.module.scss';

const Accessory = ({ products, isMobile, accessory, accessory: { id, name, description, price, gallery, preview }, addToCart }) => {

  const add = () => {
    addToCart({ ...accessory, img: preview, type: 'accessory' }, () => {
      Router.push('/cart?step=1', '/cart/1').then(() => window.scrollTo(0, 0));
    });
  };

  const hasInCart = products.find(product => product.id === id);

  return (
    <div className={css.container}>
      <CustomHead
        title={name}
        url={`/accessory/${id}`}
      />
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
          <div>
            {!isMobile && (
            <h1 className={css.title}>
              {name}
              <AccessoriesLink />
            </h1>
            )}
            {!isMobile && <div className={css.price}>{priceFormat(price)}</div>}
            <BuyButtonsGroup
              handleClick={add}
              hasInCart={hasInCart}
            />
            <div className={css.desc}>
              <ContentWrapper content={description} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Accessory.propTypes = {
  accessory: PropTypes.object,
  addToCart: PropTypes.func.isRequired,
};

export default Accessory;
