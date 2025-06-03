import React from 'react';
import styles from './header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <a href="https://haoxinqing.cn/" target="_blank">
      <img
        src="/images/logo.png"
        alt="HXQ Logo"
        width="130"
        height="86"
        className="HXQ-logo"
      />
    </a>
  </header>
);

export default Header;
