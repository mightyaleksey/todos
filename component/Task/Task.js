'use strict';

const { Component, PropTypes } = require('react');
const Icon = require('../Icon/Icon');
const React = require('react');
const styles = require('./Task.css');

class Task extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  onChange(e) {
    this.props.onChange(e, {
      checked: !this.props.checked,
      value: this.props.description,
    });
  }

  onRemove(e) {
    this.props.onRemove(e, {
      checked: this.props.checked,
      value: this.props.description,
    });
  }

  render() {
    const { checked, description, styles } = this.props;

    return (
      <li className={styles.container}>
        <Icon
          onClick={this.onChange}
          type={checked
            ? 'finished'
            : 'unfinished'}/>
        <span className={checked
          ? styles['crossed-text']
          : styles.text}>
          {description}
        </span>
        <Icon
          onClick={this.onRemove}
          type='times'/>
      </li>
    );
  }
}

Task.defaultProps = {
  onRemove: function noop() {},
  onChange: function noop() {},
  styles,
};

Task.propTypes = {
  onRemove: PropTypes.func,
  onChange: PropTypes.func,
  styles: PropTypes.object,
};

module.exports = Task;
