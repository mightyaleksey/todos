'use strict';

const { PropTypes } = require('react');
const React = require('react');
const styles = require('./Icon.css');

module.exports = Icon;

function Icon(props) {
  return (
    <i className={props.styles[props.type]} {...props}/>
  );
}

Icon.defaultProps = {
  styles,
};

Icon.propTypes = {
  styles: PropTypes.object,
  type: PropTypes.string,
};
