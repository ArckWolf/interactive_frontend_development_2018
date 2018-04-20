import React from 'react';
import PropTypes from 'prop-types';


const InputGame = (props) => {
  return (
    <div className='inputGame-form'>
    <button type='submit' onClick={props.onSubmit.bind()}>
      {props.text}
    </button>
  </div>
  );
};

InputGame.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  text: PropTypes.string
};

export default InputGame;
