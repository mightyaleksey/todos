'use strict';

const { PropTypes } = require('react');
const { connect } = require('react-redux');
const { createChangeAction, createRemoveAction, createSubmitAction } = require('../../reducer/createAction');
const Header = require('../Header/Header');
const React = require('react');
const Status = require('../Status/Status');
const TaskList = require('../TaskList/TaskList');
const UserInput = require('../UserInput/UserInput');
const styles = require('./App.css');

const ConnectedStatus = connect(
  state => ({
    value: state.unfinishedTasks,
  })
)(Status);

const ConnectedTaskList = connect(
  state => ({
    value: state.tasks,
  }),
  dispatch => ({
    onChange: (_, value) => dispatch(createChangeAction('tasks', value)),
    onRemove: (_, value) => dispatch(createRemoveAction('tasks', value)),
  })
)(TaskList);

const ConnectedUserInput = connect(
  state => ({
    value: state.userInput,
  }),
  dispatch => ({
    onChange: (_, { value }) => dispatch(createChangeAction('userInput', value)),
    onSubmit: (_, { value }) => dispatch(createSubmitAction('userInput', value)),
  }),
)(UserInput);

module.exports = App;

function App(props) {
  return (
    <section className={props.styles.app}>
      <Header>todos</Header>
      <ConnectedUserInput/>
      <ConnectedTaskList/>
      <ConnectedStatus/>
    </section>
  );
}

App.defaultProps = {
  styles,
};

App.propTypes = {
  styles: PropTypes.object,
};
