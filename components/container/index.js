import { createStore } from 'redux';
import reducers from '../../reducers';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from '../app';

export default class Container extends Component {
  render() {
    const { initial } = this.props;
    const store = createStore(reducers, initial);

    return (
      <Provider store={ store }>
        { () => <App /> }
      </Provider>
    );
  }
}
