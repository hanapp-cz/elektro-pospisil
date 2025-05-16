import * as React from 'react';

import styles from './Header.module.css';
import { Navigation } from './Navigation';

type TProps = NoChildren;

export const Header: React.FC<TProps> = () => {
  return (
    <header className={styles.header}>
      <div className={styles.backdrop}></div>
      <Navigation />
    </header>
  );
};
