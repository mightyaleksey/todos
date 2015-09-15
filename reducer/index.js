import { ADD, REMOVE, TOGGLE, UPDATE_USER_INPUT } from '../actions';
import { assign, findIndex } from 'lodash';

const initialState = {
  taskList: [],
  userInput: ''
};

export default function reducer(state = initialState, action) {
  let task;

  switch (action.type) {
  case ADD:
    task = {
      taskId: Date.now(),
      description: state.userInput,
      checked: false
    };

    state.taskList = state.taskList.concat(task);
    state.userInput = '';
    return state;

  case REMOVE:
    state.taskList = state.taskList.filter(({ taskId }) => taskId !== action.taskId);
    return state;

  case TOGGLE:
    const index = findIndex(state.taskList, {taskId: action.taskId});
    task = state.taskList[index];
    task.checked = !task.checked;
    state.taskList.splice(index, 1, assign({}, task));
    return state;

  case UPDATE_USER_INPUT:
    state.userInput = action.userInput;
    return state;

  default:
    return state;
  }
}
