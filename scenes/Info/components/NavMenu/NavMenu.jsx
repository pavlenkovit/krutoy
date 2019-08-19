import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import cn from 'classnames';

import css from './NavMenu.module.scss';

const menuItems = [
  {
    id: 'delivery',
    title: 'Доставка и возврат',
    href: '/info/delivery',
  },
  {
    id: 'warranty',
    title: 'Гарантия',
    href: '/info/warranty',
  },
  {
    id: 'construct',
    title: 'Инструкция и сборка',
    href: '/info/construct',
  },
  {
    id: 'faq',
    title: 'Вопросы и ответы',
    href: '/info/faq',
  },
  {
    id: 'terms-of-use',
    title: 'Пользовательское соглашение',
    href: '/info/terms-of-use',
  },
  {
    id: 'privacy-policy',
    title: 'Политика конфиденциальности',
    href: '/info/privacy-policy',
  },
];

class NavMenu extends PureComponent {
  render() {
    const { activeItem } = this.props;

    return (
      <div className={css.menu}>
        {menuItems.map((item, idx) => {
          const classesItem = cn(css.item, {
            [css.active]: item.id === activeItem,
          });
          return (
            <Link key={idx} href={item.href}>
              <a className={classesItem}>
                {item.title}
              </a>
            </Link>
          );
        })}
      </div>
    );
  }
}

NavMenu.propTypes = {
  activeItem: PropTypes.string,
};

export default NavMenu;
