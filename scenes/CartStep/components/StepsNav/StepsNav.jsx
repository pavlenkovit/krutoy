import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import css from './StepsNav.module.scss';

import NextIcon from '../../../../icons/NextIcon';

const items = [
  'Ваша корзина',
  'Оформление',
  'Способ доставки',
  'Оплата',
];

class StepsNav extends PureComponent {
  render() {
    const { step } = this.props;
    return (
      <nav className={css.nav}>
        {items.map((item, idx) => {
          const classesItem = cn(css.item, {
            [css.itemActive]: step === idx + 1,
          });

          return (
            <div className={css.itemWrap} key={idx}>
              <div className={classesItem} key={idx}>{idx + 1}. {items[idx]}</div>
              {idx !== items.length - 1 && <NextIcon customClass={css.icon} />}
            </div>
          );
        })}
      </nav>
    );
  }
}

StepsNav.propTypes = {
  step: PropTypes.number.isRequired,
};

export default StepsNav;
