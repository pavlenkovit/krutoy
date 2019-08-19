import React from 'react';
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

export default Header;
