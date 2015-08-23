import React, { Component } from 'react';
import css from './index.css';

export default class Todo extends Component {
  onClick() {
    const { dispatch, uniq } = this.props;
    dispatch({type: 'REMOVE', index: uniq});
  }

  render() {
    const { uniq } = this.props;
    const key = `todo${uniq}`

    return (
      <div className={ css.todo }>
        <input className={ css.control } id={ key } type='checkbox' />
        <button className={ css.destroy } onClick={ this.onClick.bind(this) }></button>
        <label className={ css.icon } htmlFor={ key }></label>
        <label className={ css.label } htmlFor={ key }>{ this.props.children }</label>
      </div>
    );
  }
}
