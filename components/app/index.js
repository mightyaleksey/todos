import { connect } from 'react-redux';
import React from 'react';
import Header from '../header';
import TaskList from '../task-list';
import Status from '../status';
import UserInput from '../user-input';
import styles from './index.css';

const ConnectedUserInput = connect(state => ({userInput: state.userInput}))(UserInput);
const ConnectedTaskList = connect(state => ({taskList: state.taskList}))(TaskList);
const ConnectedStatus = connect(state => ({unfinishedCount: state.unfinishedCount}))(Status);

export default props => {
  return (
    <section className={ styles.app }>
      <Header>todos</Header>
      <ConnectedUserInput />
      <ConnectedTaskList />
      <ConnectedStatus />
    </section>
  );
};
