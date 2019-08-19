import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Logo from './components/Logo';
import Sidebar from './components/Sidebar';
import NavMenu from './components/NavMenu';
import PayMethods from './components/PayMethods';
import Info from './components/Info';
import SocialLinks from './components/SocialLinks';

import css from './Footer.module.scss';

class Footer extends PureComponent {
  state = { isShowMail: false };

  showMail = () => {
    this.setState({ isShowMail: true });
  }

  render() {
    const { isMobile, router: { route } } = this.props;
    const isCart = route === '/cart';
    const { isShowMail } = this.state;

    return (
      <footer id="footer" className={css.container}>
        <div className={css.row}>
          <div className={css.col}>
            <Logo isCart={isCart} />
          </div>
          <div className={css.col}>
            <Sidebar title={!isMobile ? 'Помощь' : ''}>
              <NavMenu isMobile={isMobile} />
              {!isMobile && <PayMethods isCart={isCart} />}
              <Info isCart={isCart} />
            </Sidebar>
          </div>
          <div className={css.col}>
            <Sidebar title="Давайте дружить">
              <SocialLinks isCart={isCart} />
            </Sidebar>
            <Sidebar
              title={(
                <div onClick={this.showMail} className={cn(css.link, { [css.linkHide]: isShowMail })}>
                  <span className={css.title}>Давайте работать</span>
                  <span className={css.mail}>hello@krutoy.store</span>
                  <svg className={css.arrow} viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg">
                    <g stroke={isCart ? '#9faeb9' : '#fff'} strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 5h13.26M11.903 1l4 4-4 4" />
                    </g>
                  </svg>
                </div>
              )}
            />
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Footer;
