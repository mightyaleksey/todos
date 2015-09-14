import { ADD, REMOVE, TOGGLE } from '../actions';

const initialState = {
  taskList: [],
  userInput: ''
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case ADD:
    break;
  case REMOVE:
    break;
  case TOGGLE:
    break;
  default:
    return state;
  }
}
