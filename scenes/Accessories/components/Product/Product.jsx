import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import css from './Product.module.scss';
import priceFormat from '../../../../utils/priceFormat';

class Product extends PureComponent {
  render() {
    const { item: { id, preview, name, price } } = this.props;
    return (
      <div className={css.product}>
        <Link href={`/accessory/${id}`}>
          <a className={css.link}>
            <div className={css.imgWrap}>
              <img className={css.img} src={preview} alt="" />
            </div>
            <div className={css.info}>
              <h2 className={css.title}>{name}</h2>
              <div className={css.price}>{priceFormat(price)}</div>
            </div>
          </a>
        </Link>
      </div>
    );
  }
}

Product.propTypes = {
  item: PropTypes.object,
};

export default Product;
