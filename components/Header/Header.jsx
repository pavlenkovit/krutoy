import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import MainMenu from './components/MainMenu';
import Logo from './components/Logo';

const Header = () => {
  return (
    <header className={styles.container}>
      <Logo />
      <MainMenu />
    </header>
  );
};

Header.propTypes = {
};

export default Header;
