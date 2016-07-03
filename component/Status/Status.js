'use strict';

const { PropTypes } = require('react');
const React = require('react');
const styles = require('./Status.css');

module.exports = Status;

function Status(props) {
  return (
    <p {...props.styles}>
      {`${props.value} items left`}
    </p>
  );
}

Status.defaultProps = {
  styles,
};

Status.propTypes = {
  styles: PropTypes.object,
  value: PropTypes.number,
};
