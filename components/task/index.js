import { remove } from '../../actions';
import React from 'react';
import Icon from '../icon';

export default ({ taskId, description, checked, dispatch }) => {
  const action = remove(taskId);

  return (
    <li>
      <Icon type={ checked ? 'finished' : 'unfinished' } />
      <span>{ description }</span>
      <Icon type='cancel' onClick={ () => dispatch(action) } />
    </li>
  );
};
