'use strict';

const { Component, PropTypes } = require('react');
const React = require('react');
const styles = require('./UserInput.css');

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onKeyDown(e) {
    if (e.keyCode !== 13) {
      return;
    }

    this.props.onSubmit(e);
  }

  render() {
    return (
      <input
        type='text'
        {...this.props}
        onKeyDown={this.onKeyDown}
        {...styles}/>
    );
  }
}

UserInput.defaultProps = {
  onSubmit: function noop() {},
};

UserInput.propTypes = {
  onSubmit: PropTypes.func,
};

module.exports = UserInput;
