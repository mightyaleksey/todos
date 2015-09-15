import { connect } from 'react-redux';
import React from 'react';
import Header from '../header';
import TaskList from '../task-list';
import UserInput from '../user-input';

const ConnectedUserInput = connect(state => ({userInput: state.userInput}))(UserInput);
const ConnectedTaskList = connect(state => ({taskList: state.taskList}))(TaskList);

export default props => {
  return (
    <section>
      <Header>todos</Header>
      <ConnectedUserInput />
      <ConnectedTaskList />
    </section>
  );
};
