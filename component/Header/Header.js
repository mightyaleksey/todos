'use strict';

const React = require('react');
const styles = require('./Header.css');

module.exports = Header;

function Header(props) {
  return (
    <header className={ styles.container }>
      <h1 className={ styles.title }>{ props.children }</h1>
    </header>
  );  
}
