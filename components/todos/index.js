import { connect } from 'react-redux';
import React, { Component } from 'react';
import Todo from '../todo';

const Item = connect()(Todo);

export default class Todos extends Component {
  render() {
    const { todos } = this.props;

    return (
      <section>
        { todos.map((todo, i) => <Item key={ i } uniq={ i }>{ todo }</Item>, this) }
      </section>
    );
  }
}
