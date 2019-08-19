import React from 'react';
import PropTypes from 'prop-types';
import css from './Accessories.module.scss';
import Product from './components/Product';

const Accessories = ({ accessories }) => {
  return (
    <main className={css.main}>
      <h1 className={css.mainTitle}>Аксессуары</h1>
      <div className={css.container}>
        <div className={css.row}>
          {accessories.map(item => (
            <div key={item.id} className={css.item}>
              <Product item={item} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

Accessories.propTypes = {
  accessories: PropTypes.array,
};

export default Accessories;
