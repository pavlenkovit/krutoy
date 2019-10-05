import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import itemsDefault from './constants/menu';
import itemsMobile from './constants/menuMobile';

import css from './NavMenu.module.scss';

const NavMenu = ({ isMobile }) => {
  const items = isMobile ? itemsMobile : itemsDefault;

  return (
    <nav className={css.container}>
      {items.map((col, idxCol) => (
        <div key={idxCol} className={css.col}>
          {col.map((item, idx) => (
            <Link key={idx} href="/info/[id]" as={`/info/${item.id}`}>
              <a className={css.link}>
                {item.title}
              </a>
            </Link>
          ))}
        </div>
      ))}
    </nav>
  );
};

NavMenu.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default NavMenu;
