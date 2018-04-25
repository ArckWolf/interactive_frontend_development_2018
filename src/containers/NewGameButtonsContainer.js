import React from 'react';
import PropTypes from 'prop-types';
import InputGame from '../components/Inputs/InputGame';
import {connect} from 'react-redux';
import {postNewRpswGame, postNewHangmanwGame} from '../actions/GameServerActions';

const NewGameButtonsContainer = (props) => {
  return (
    <div className="app-buttons">
      <InputGame onSubmit={props.rpsGameCreated} text='Create RPS game' />
      <InputGame onSubmit={props.hangmanGameCreated} text='Create Hangman game' />
    </div>
  );
};

NewGameButtonsContainer.propTypes = {
  rpsGameCreated: PropTypes.func.isRequired,
  hangmanGameCreated: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  console.log('dispatch//////////////.....'); // eslint-disable-line
  console.log(dispatch); // eslint-disable-line
  const newLocal = {
    rpsGameCreated: () => dispatch(postNewRpswGame()),
    hangmanGameCreated: () => dispatch(postNewHangmanwGame())
  };
  return newLocal;
};

const mapStateToProps = (state) => {
  return {
      games: state.games
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewGameButtonsContainer);
