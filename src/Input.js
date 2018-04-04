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

  onSubmit() {
    this.props.onSubmit({userInput: this.state.userInput});
  }

  render() {
    return (
      <div className='container'>
        <input
          className='item'
          type="text"
          maxLength="1"
          onChange={this.handleAuthorChange.bind(this)}
        />
        <button className='item' onClick={this.onSubmit.bind(this)}>
          Enter
        </button>
      </div>
    );
  }
}
Input.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Input;
