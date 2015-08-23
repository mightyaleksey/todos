import { connect } from 'react-redux';
import React, { Component } from 'react';
import Todos from '../todos';
import UserInput from '../user-input';
import css from './index.css';

const Input = connect()(UserInput);
const List = connect(state => state)(Todos);

export default class App extends Component {
  render() {
    return (
      <section className={ css.app }>
        <header className={ css.header }>
          <h1 className={ css.title }>todos</h1>
          <Input />
          <List />
        </header>
      </section>
    );
  }
}
