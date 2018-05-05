import React from 'react';
import PropTypes from 'prop-types';
import InputLogin from '../components/InputLogin';

const CreateLoginButtons = ({loginUser, logOutUser, logInRequestInFlight,
                            logOutRequestInFlight, playerId, error}) => {
  const Login = (
  <div>
    <InputLogin
        onSubmit={(name) => loginUser(name)}
      />
  </div>
  );

  const LogOut = (
    <div>
        <button
            onClick={() => logOutUser()}
          >Log Out</button>
    </div>
    );

  const ErrorInformaton = (
    <div>
        <h3>This username is already in use!</h3>
    </div>
    );
  return (
    <div className='create-game-buttons'>
      {error !='' ? ErrorInformaton : null}
      {playerId ==='' ? Login : LogOut}
      {logInRequestInFlight ? <div>Connecting...</div> : null}
      {logOutRequestInFlight ? <div>DisConnecting...</div> : null}
    </div>
  );
};

CreateLoginButtons.propTypes = {
  loginUser: PropTypes.func.isRequired,
  logInRequestInFlight: PropTypes.bool.isRequired,
  logOutRequestInFlight: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
};

export default CreateLoginButtons;
