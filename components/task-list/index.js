import { connect } from 'react-redux';
import React, { Component } from 'react';
import Task from '../task';

const ConnectedTask = connect()(Task);

export default class TaskList extends Component {
  render() {
    const tasks = [{taskId: 2, description: 'test'}]
      .map(task => <ConnectedTask key={ task.taskId } { ...task } />);

    return <ul>{ tasks }</ul>;
  }
}
