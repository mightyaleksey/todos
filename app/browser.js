'use strict';

const { Provider } = require('react-redux');
const { render } = require('react-dom');
const App = require('../component/App/App');
const React = require('react');
const createAppStore = require('../store');

const store = createAppStore();

render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.querySelector('#container'));
