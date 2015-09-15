import { remove } from '../../actions';
import React from 'react';
import Icon from '../icon';

// smart
export default ({ taskId, description, dispatch }) => {
  const action = remove(taskId);

  return (
    <li>
      <Icon />
      <span>{ description }</span>
      <Icon onClick={ () => dispatch(action) } />
    </li>
  );
};
