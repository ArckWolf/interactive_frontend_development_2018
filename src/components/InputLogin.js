import React, {Component} from 'react';
import PropTypes from 'prop-types';

class InputLogin extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {userName: ''};
  }

  onChange(event) {
    this.setState({
      userName: event.target.value
    });
  }

  onSubmit(event) {
      const submissionValue = this.state.userName;
      this.setState({userName: ''});
      this.props.onSubmit(submissionValue);
  }

  render() {
    return (
      <div>
        <input
          value={this.state.userName}
          onChange={this.onChange}
          disabled={this.props.disabled}
        />
        <button
          onClick={this.onSubmit}
        >Login</button>
      </div>
    );
  }
}

InputLogin.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default InputLogin;
