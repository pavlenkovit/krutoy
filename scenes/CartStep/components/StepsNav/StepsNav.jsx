import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import NextIcon from '../../../../icons/NextIcon';

import css from './StepsNav.module.scss';

const items = [
  'Ваша корзина',
  'Оформление',
  'Способ доставки',
  'Оплата',
];

const StepsNav = ({ step }) => {
  return (
    <nav className={css.nav}>
      {items.map((item, idx) => (
        <div className={css.itemWrap} key={idx}>
          <div className={cn(css.item, { [css.itemActive]: step === idx + 1 })} key={idx}>
            {idx + 1}. {items[idx]}
          </div>
          {idx !== items.length - 1 && <NextIcon customClass={css.icon} />}
        </div>
      ))}
    </nav>
  );
};

StepsNav.propTypes = {
  step: PropTypes.number.isRequired,
};

export default StepsNav;
