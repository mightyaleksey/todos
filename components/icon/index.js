import React from 'react';
import styles from './index.css';

export default props => {
  return <i className={ styles[props.type] } { ...props }></i>;
};
