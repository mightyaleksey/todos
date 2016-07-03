'use strict';

const React = require('react');
const styles = require('./Status.css');

module.exports = Status;

function Status(props) {
  return (
    <p {...styles}>
      {`${props.value} items left`}
    </p>
  );
}
