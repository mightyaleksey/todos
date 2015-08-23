import React, { Component } from 'react';
import css from './index.css';

export default class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  onChange(value) {
    this.setState({text: value});
  }

  onKeyPress(key, dispatch) {
    if (key !== 13) { // filtering enter key
      return;
    }

    dispatch({type: 'ADD', text: this.state.text});
    this.setState({text: ''});
  }

  render() {
    const { dispatch } = this.props;

    return (
      <input { ...css }
        onChange={ e => this.onChange(e.target.value) }
        onKeyPress={ e => this.onKeyPress(e.which, dispatch) }
        value={ this.state.text }
        type='text' />
    );
  }
}
