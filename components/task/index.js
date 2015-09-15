import { remove, toggle } from '../../actions';
import React from 'react';
import Icon from '../icon';

export default ({ taskId, description, checked, dispatch }) => {
  const toggleAction = toggle(taskId);
  const removeAction = remove(taskId);

  return (
    <li>
      <Icon type={ checked ? 'finished' : 'unfinished' } onClick={ () => dispatch(toggleAction) } />
      <span>{ description }</span>
      <Icon type='cancel' onClick={ () => dispatch(removeAction) } />
    </li>
  );
};
