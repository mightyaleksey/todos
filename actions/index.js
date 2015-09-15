export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const TOGGLE = 'TOGGLE';

export function add(description) {
  return {
    type: ADD,
    description: description
  };
}

export function remove(taskId) {
  return {
    type: REMOVE,
    taskId: taskId
  };
}

export function toggle(taskId) {
  return {
    type: TOGGLE,
    taskId: taskId
  };
}
