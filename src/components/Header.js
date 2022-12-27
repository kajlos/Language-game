import React from 'react';
import styles from '../styles/Header.module.css';
function Header() {
  return (
    <header className="container">
      <h1 className={styles.heading}>Language Game</h1>
    </header>
  );
}

export default Header;
