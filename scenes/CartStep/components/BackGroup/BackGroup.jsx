import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import css from './BackGroup.module.scss';

const BackGroup = ({ items }) => {
  return (
    <div className={css.container}>
      {items.map((item, idx) => {
        return (
          <div key={idx} className={css.item}>
            <div className={css.title}>{item.name}</div>
            <div className={css.value}>{item.value}</div>
            <Link href="/cart/[step]" as={`/cart/${item.linkIndex}`}>
              <a className={css.link}>
                Изменить
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

BackGroup.propTypes = {
  items: PropTypes.array.isRequired,
};

export default BackGroup;
