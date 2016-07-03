'use strict';

const React = require('react');
const Task = require('../Task/Task');
const styles = require('./TaskList.css');

module.exports = TaskList;

/**
 * @param {object} props
 * @param {string[]} props.value
 */
function TaskList(props) {
  const tasks = props.value.map((value, i) => (
    <Task description={value} key={`_${i}${value}`}/>
  ));

  return (
    <ul {...styles}>
      {tasks}
    </ul>
  );
}
