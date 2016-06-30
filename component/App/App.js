'use strict';

const Header = require('../Header/Header');
const React = require('react');
const UserInput = require('../UserInput/UserInput');
const styles = require('./App.css');

module.exports = App;

function App() {
  return (
    <section className={ styles.app }>
      <Header>todos</Header>
      <UserInput/>
    </section>
  );
}
