export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const TOGGLE = 'TOGGLE';

export function add(description) {
  return {
    type: ADD,
    description: description
  };
}

export function remove(id) {
  return {
    type: REMOVE,
    id: id
  };
}

export function toggle(id) {
  return {
    type: TOGGLE,
    id: id
  };
}
