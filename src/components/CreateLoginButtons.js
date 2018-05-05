import React from 'react';
import PropTypes from 'prop-types';
import InputLogin from '../components/InputLogin';

const gameButtons = [
  {description: 'Login', type: 'rps'},
];

const CreateLoginButtons = ({loginUser, createRequestInFlight}) => {
  const buttons = gameButtons.map(({description, type}, index) =>
  <div key={index}>
  <InputLogin
        onSubmit={(name) => loginUser(name)}
      />
  </div>
  );

  return (
    <div className='create-game-buttons'>
      {buttons}
      {createRequestInFlight ? <div>Creating...</div> : null}
    </div>
  );
};

CreateLoginButtons.propTypes = {
  loginUser: PropTypes.func.isRequired,
  createRequestInFlight: PropTypes.bool.isRequired
};

export default CreateLoginButtons;
