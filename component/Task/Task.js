'use strict';

const Icon = require('../Icon/Icon');
const React = require('react');
const styles = require('./Task.css');

module.exports = Task;

/**
 * @param {object} props
 * @param {object} props.checked
 * @param {object} props.description
 */
function Task(props) {
  return (
    <li className={styles.container}>
      <Icon type={props.checked
        ? styles.finished
        : styles.unfinished}/>
      <span className={props.checked
        ? styles['crossed-text']
        : styles.text}>
        {props.description}
      </span>
      <Icon type='times'/>
    </li>
  );
}
