'use strict';

const { Provider } = require('react-redux');
const { combineReducers, createStore } = require('redux');
const { filter, findIndex, matches, negate, omit } = require('lodash');
const { isChangeAction, isRemoveAction, isSubmitAction } = require('../reducer/createAction');
const { render } = require('react-dom');
const App = require('../component/App/App');
const React = require('react');

const store = createStore(combineReducers({
  tasks: function calculateTasks(value = [], action) {
    if (isChangeAction(action) && action.fieldName === 'tasks') {
      const index = findIndex(value, omit(action.value, 'checked'));
      return value.map((task, i) => i === index
        ? action.value
        : task);
    }

    if (isRemoveAction(action) && action.fieldName === 'tasks') {
      return filter(value, negate(matches(action.value)));
    }

    if (isSubmitAction(action) && action.fieldName === 'userInput') {
      return value.concat({checked: false, value: action.value});
    }

    return value;
  },
  unfinishedTasks: function calculateUnfinishedTasks(value = 0, action) {
    if (isChangeAction(action) && action.fieldName === 'tasks') {
      return action.value.checked
        ? value - 1
        : value + 1;
    }

    if (isRemoveAction(action) && action.fieldName === 'tasks') {
      return !action.value.checked
        ? value - 1
        : value;
    }

    if (isSubmitAction(action)) {
      return value + 1;
    }

    return value;
  },
  userInput: function calculateUserInput(value = '', action) {
    if (action.fieldName !== 'userInput') {
      return value;
    }

    if (isChangeAction(action)) {
      return action.value;
    }

    if (isSubmitAction(action)) {
      return '';
    }
  },
}), injectDevTools());

render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.querySelector('#container'));

function injectDevTools() {
  return window.devToolsExtension
    ? window.devToolsExtension()
    : f => f;
}
