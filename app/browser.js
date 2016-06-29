'use strict';

const { Provider } = require('react-redux');
const { createStore } = require('redux');
const { render } = require('react-dom');
const App = require('../component/App/App');
const React = require('react');

const store = createStore(() => ({}));

render((
  <Provider store={ store }>
    <App/>
  </Provider>
), document.querySelector('#container'));
