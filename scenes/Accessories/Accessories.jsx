import React from 'react';
import PropTypes from 'prop-types';
import Product from './components/Product';
import CustomHead from '../../components/CustomHead';

import css from './Accessories.module.scss';

const Accessories = ({ accessories }) => {
  return (
    <main className={css.main}>
      <CustomHead
        title="Аксессуары"
        url="/accessories"
      />
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
