import { cloneDeep } from 'lodash';

export default function reducers(state = {todos: []}, action) {
  switch (action.type) {
  case 'ADD':
    state = cloneDeep(state);
    state.todos.push(action.text);
    return state;

  case 'REMOVE':
    state = cloneDeep(state);
    state.todos.splice(action.index, 1);
    return state;

  default:
    return state;
  }
}
