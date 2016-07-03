'use strict';

const { Component, PropTypes } = require('react');
const React = require('react');
const Task = require('../Task/Task');
const styles = require('./TaskList.css');

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  onChange() {
    this.props.onChange.apply(this, arguments);
  }

  onRemove() {
    this.props.onRemove.apply(this, arguments);
  }

  render() {
    const { styles, value } = this.props;

    return (
      <ul {...styles}>
        {this.renderTasks(value)}
      </ul>
    );
  }

  renderTasks(tasks) {
    return tasks.map(({ checked, value }, i) => (
      <Task
        checked={checked}
        description={value}
        key={`_${i}${value}`}
        onChange={this.onChange}
        onRemove={this.onRemove}/>
    ));
  }
}

TaskList.defaultProps = {
  onChange: function noop() {},
  onRemove: function noop() {},
  styles,
};

TaskList.propTypes = {
  onChange: PropTypes.func,
  onRemove: PropTypes.func,
  styles: PropTypes.object,
};

module.exports = TaskList;
