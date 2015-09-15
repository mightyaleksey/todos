import React from 'react';
import styles from './index.css';

export default ({ children }) => {
  return (
    <header className={ styles.container }>
      <h1 className={ styles.title }>{ children }</h1>
    </header>
  );
};
