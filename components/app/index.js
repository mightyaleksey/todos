import { connect } from 'react-redux';
import React from 'react';
import Header from '../header';
import TaskList from '../task-list';
import Status from '../status';
import UserInput from '../user-input';

const ConnectedUserInput = connect(state => ({userInput: state.userInput}))(UserInput);
const ConnectedTaskList = connect(state => ({taskList: state.taskList}))(TaskList);
const ConnectedStatus = connect(state => ({
  finishedCount: state.finishedCount,
  unfinishedCount: state.unfinishedCount
}))(Status);

export default props => {
  return (
    <section>
      <Header>todos</Header>
      <ConnectedUserInput />
      <ConnectedTaskList />
      <ConnectedStatus />
    </section>
  );
};
