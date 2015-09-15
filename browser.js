import reducer from './reducer';
import { createStore } from 'redux';
import React, { render } from 'react';
import Container from './components/container';

const store = createStore(reducer);

store.subscribe(_ => {
  console.log(store.getState());
});

render(<Container store={ store } />, document.body);
