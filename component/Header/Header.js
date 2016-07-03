'use strict';

const { PropTypes } = require('react');
const React = require('react');
const styles = require('./Header.css');

module.exports = Header;

function Header(props) {
  return (
    <header className={props.styles.container}>
      <h1 className={props.styles.title}>{props.children}</h1>
    </header>
  );
}

Header.defaultProps = {
  styles,
};

Header.propTypes = {
  styles: PropTypes.object,
};
