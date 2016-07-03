'use strict';

const React = require('react');
const styles = require('./Icon.css');

module.exports = Icon;

function Icon(props) {
  return (
    <i className={styles[props.type]} {...props}/>
  );
}
