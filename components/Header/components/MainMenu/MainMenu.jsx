import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Link from 'next/link';
import { CSSTransition } from 'react-transition-group';
import models from '../../../../constants/models';
import Cart from './components/Cart';
import BurgerButton from './components/BurgerButton';

import css from './MainMenu.module.scss';

const menu = [
  {
    title: 'Модели',
    href: '/',
    disabled: true,
    submenu: models,
  },
  {
    title: 'Аксессуары',
    href: '/accessories',
  },
  {
    title: 'Идея',
    href: '/idea',
  },
];

const mobileMenu = [
  {
    title: 'Доставка и возврат',
    href: '/info?id=delivery',
    as: '/info/delivery'
  },
  {
    title: 'Гарантия',
    href: '/info?id=warranty',
    as: '/info/warranty',
  },
  {
    title: 'Инструкция и сборка',
    href: '/info?id=construct',
    as: '/info/construct',
  },
];

class MainMenu extends PureComponent {
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.menuIsActive !== this.props.menuIsActive) {
      document.querySelector('body').classList.remove('menuOpen');
      if (this.props.menuIsActive) {
        document.querySelector('body').classList.add('menuOpen');
      }
    }
  }

  render() {
    const { count, isMobile, menuIsActive, closeMenu, toggleMenu, router: { route, query: { id: activeModel } } } = this.props;
    const isCart = route === '/cart';

    const menuClasses = cn(css.menu, {
      [css.menu_cartMode]: isCart,
    });

    return (
      <nav className={menuClasses}>
        <CSSTransition
          in={!isMobile || menuIsActive}
          timeout={200}
          classNames={{
            enter: css.enter,
            enterActive: css.enterActive,
            exit: css.exit,
            exitActive: css.exitActive,
          }}
          unmountOnExit
        >
          <ul className={css.list}>
            {menu.map((item, idx) => {
              const itemClasses = cn(css.item, {
                [css.item_active]: route === item.href,
              });

              return (
                <li key={idx} className={itemClasses}>
                  <div className={css.decor}>
                    <div className={cn(css.line, css.line_lt)} />
                    <div className={cn(css.line, css.line_ct)} />
                    <div className={cn(css.line, css.line_rt)} />
                    <div className={cn(css.line, css.line_lb)} />
                    <div className={cn(css.line, css.line_cb)} />
                    <div className={cn(css.line, css.line_rb)} />
                  </div>
                  {!item.disabled ? (
                    <Link href={item.href} as={item.href}>
                      <a>
                        <div onClick={closeMenu}>{item.title}</div>
                      </a>
                    </Link>
                  ) : (
                    isMobile
                      ? (
                        <Link href="/model?id=moose" as="/model/moose">
                          <a>
                            <div onClick={closeMenu}>{item.title}</div>
                          </a>
                        </Link>
                      )
                      : <div>{item.title}</div>
                  )
                  }
                  {item.submenu && !isMobile && (
                    <div
                      className={css.subMenu}
                    >
                      {item.submenu.map((subItem, idx) => {
                        const classesSubItem = cn(css.subItem, {
                          [css.subItem_active]: subItem.id === activeModel,
                        });
                        return (
                          <div key={idx} className={classesSubItem}>
                            <Link href={`/model?id=${subItem.id}`} as={`/model/${subItem.id}`}>
                              <a>
                                <div onClick={closeMenu}>{subItem.title}</div>
                              </a>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </li>
              );
            })}
            {isMobile && mobileMenu.map((item, idx) => {
              return (
                <li key={idx} className={cn(css.item, css.infoItem, { [css.infoItemFirst]: idx === 0 })}>
                  <Link href={item.href} as={item.as}>
                    <a>
                      <div onClick={closeMenu}>{item.title}</div>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </CSSTransition>
        {isMobile && <BurgerButton isActive={menuIsActive} handleClick={toggleMenu} isCart={isCart} />}

        <Link href="/cart?step=1" as="/cart/1">
          <a className={cn(css.cartLink, css.cartLink_copy)} onClick={closeMenu}>
            <Cart count={count} isCart={isCart} menuIsActive={menuIsActive} />
          </a>
        </Link>

        <Link href="/cart?step=1" as="/cart/1">
          <a className={css.cartLink} onClick={closeMenu}>
            <Cart count={count} isCart={isCart} menuIsActive={menuIsActive} />
          </a>
        </Link>
      </nav>
    );
  }
}

MainMenu.propTypes = {
  count: PropTypes.number.isRequired,
  isMobile: PropTypes.bool.isRequired,
  menuIsActive: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default MainMenu;
