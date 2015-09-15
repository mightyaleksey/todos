export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const TOGGLE = 'TOGGLE';
export const UPDATE_USER_INPUT = 'UPDATE_USER_INPUT';

export function add() {
  return {
    type: ADD
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

export function updateUserInput(userInput) {
  return {
    type: UPDATE_USER_INPUT,
    userInput: userInput
  }
}
