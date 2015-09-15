import React from 'react';
import styles from './index.css';

export default ({ children }) => {
  return (
    <header>
      <h1 className={ styles.title }>{ children }</h1>
    </header>
  );
};
