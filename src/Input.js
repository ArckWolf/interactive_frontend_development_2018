import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  constructor(props) {
    super(props);
  }

  handleOnKeyUp(event) {
    if (event.keyCode == '13' && ['R', 'P', 'S'].includes(event.target.value.toUpperCase())) {
      this.props.onSubmit({userInput: event.target.value.toUpperCase()});
    }
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
        />
      </div>
    );
  }
}

Input.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Input;
