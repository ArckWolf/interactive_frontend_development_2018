/* eslint-disable */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: 'unchangeable text'
    };
  }

  handleAuthorChange(event) {
    this.setState({userInput: event.target.value.toUpperCase()});
  }

  handleOnKeyUp(event) {
    if (event.keyCode == '13'){
      this.props.onSubmit({userInput: this.state.userInput});
    }
  }

  onSubmit() {
    this.props.onSubmit({userInput: this.state.userInput});
  }

  render() {
    return (
      <div className='subContainer'>
        <input
          id="gameInput"
          className='item'
          type="text"
          maxLength="1"
          onKeyUp={this.handleOnKeyUp.bind(this)}
          onChange={this.handleAuthorChange.bind(this)}
        />
      </div>
    );
  }
}
Input.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Input;
