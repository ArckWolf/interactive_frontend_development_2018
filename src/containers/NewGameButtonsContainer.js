import React from 'react';
import PropTypes from 'prop-types';
import InputGame from '../components/Inputs/InputGame';
import {connect} from 'react-redux';
import {rpsGameCreated, hangmanGameCreated} from '../actions';

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
  const newLocal = {
    rpsGameCreated: () => dispatch(rpsGameCreated()),
    hangmanGameCreated: () => dispatch(hangmanGameCreated())
  };
  return newLocal;
};

const mapStateToProps = (state) => {
  return {
      games: state.games.play
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewGameButtonsContainer);
