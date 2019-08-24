import React from 'react';
import PropTypes from 'prop-types';
import Product from './components/Product';
import ProductAssembly from './components/ProductAssembly';

import css from './OtherProducts.module.scss';

const OtherProducts = ({ accessories }) => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Дополнительные аксессуары</h2>
      <div className={css.row}>
        {accessories.map((item, idx) => {
          return (
            <div key={idx} className={css.col}>
              <Product item={item} />
            </div>
          );
        })}
        <div className={css.col}>
          <ProductAssembly />
        </div>
      </div>
    </div>
  );
};

OtherProducts.propTypes = {
  accessories: PropTypes.array.isRequired,
};

export default OtherProducts;
