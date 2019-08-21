import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import cn from 'classnames';

import css from './NavMenu.module.scss';

const menuItems = [
  {
    id: 'delivery',
    title: 'Доставка и возврат',
  },
  {
    id: 'warranty',
    title: 'Гарантия',
  },
  {
    id: 'construct',
    title: 'Инструкция и сборка',
  },
  {
    id: 'faq',
    title: 'Вопросы и ответы',
  },
  {
    id: 'terms-of-use',
    title: 'Пользовательское соглашение',
  },
  {
    id: 'privacy-policy',
    title: 'Политика конфиденциальности',
  },
];

const NavMenu = ({ activeItem }) => {
  return (
    <div className={css.menu}>
      {menuItems.map(item => {
        return (
          <Link key={item.id} href={`/info?id=${item.id}`} as={`/info/${item.id}`}>
            <a className={cn(css.item, { [css.active]: item.id === activeItem })}>
              {item.title}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

NavMenu.propTypes = {
  activeItem: PropTypes.string,
};

export default NavMenu;
