import debug from 'debug';
import reducer from './reducer';
import { createStore } from 'redux';
import React, { render } from 'react';
import Container from './components/container';

const store = createStore(reducer);

const debugState = debug('state');
store.subscribe(_ => debugState(store.getState()));
window.debug = debug;

render(<Container store={ store } />, document.body);
