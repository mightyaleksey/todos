'use strict';

const { Component, PropTypes } = require('react');
const React = require('react');
const styles = require('./UserInput.css');

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onChange(e) {
    this.props.onChange(e, {
      value: e.target.value,
    });
  }

  onKeyDown(e) {
    if (e.keyCode !== 13) {
      return;
    }

    this.props.onSubmit(e, {
      value: e.target.value,
    });
  }

  render() {
    return (
      <input
        type='text'
        {...this.props}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        {...styles}/>
    );
  }
}

UserInput.defaultProps = {
  onChange: function noop() {},
  onSubmit: function noop() {},
};

UserInput.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

module.exports = UserInput;
