import React from 'react';
import styles from './index.css';

export default ({ unfinishedCount }) => {
  const content = `${unfinishedCount} items left`;
  return <p { ...styles }>{ content }</p>;
};
