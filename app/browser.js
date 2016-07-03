'use strict';

const { Provider } = require('react-redux');
const { combineReducers, createStore } = require('redux');
const { isChangeAction, isSubmitAction } = require('../reducer/createAction');
const { render } = require('react-dom');
const App = require('../component/App/App');
const React = require('react');

const store = createStore(combineReducers({
  tasks: function calculateTasks(value = [], action) {
    return isSubmitAction(action) && action.fieldName === 'userInput'
      ? value.concat(action.value)
      : value;
  },
  unfinishedTasks: function calculateUnfinishedTasks(value = 0, action) {
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
