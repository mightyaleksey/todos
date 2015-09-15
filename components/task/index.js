import { remove, toggle } from '../../actions';
import React from 'react';
import Icon from '../icon';
import styles from './index.css'

export default ({ taskId, description, checked, dispatch }) => {
  const toggleAction = toggle(taskId);
  const removeAction = remove(taskId);
  const iconState = checked ? 'finished' : 'unfinished';
  const textState = checked ? 'crossed-text' : 'text';

  return (
    <li className={ styles.container }>
      <Icon type={ iconState } onClick={ () => dispatch(toggleAction) } />
      <span className={ styles[textState] }>{ description }</span>
      <Icon type='times' onClick={ () => dispatch(removeAction) } />
    </li>
  );
};
