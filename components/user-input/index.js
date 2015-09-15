import { add, updateUserInput } from '../../actions';
import React, { Component } from 'react';

export default class UserInput extends Component {
  submit(key, dispatch) {
    if (key !== 13) { // filtering enter key
      return;
    }

    const action = add();
    dispatch(action);
  }

  updateUserInput(userInput, dispatch) {
    const action = updateUserInput(userInput);
    dispatch(action);
  }

  render() {
    const { dispatch, userInput } = this.props;
    const props = {
      onChange: e => this.updateUserInput(e.target.value, dispatch),
      onKeyPress: e => this.submit(e.which, dispatch),
      value: userInput
    };

    return <input type='text' { ...props } />;
  }
}
