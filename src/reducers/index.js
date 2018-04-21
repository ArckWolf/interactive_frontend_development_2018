import {
  RPS_GAME_CREATED,
  HANGMAN_GAME_CREATED,
  HANGMAN_GUESS_SUBMITTED,
  RPS_GUESS_SUBMITTED
} from '../actions/index.js';

const initialState = {};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANGMAN_GAME_CREATED: {
      return Object.assign({}, state, {[action.payload.id]: action.payload});
    }
    case RPS_GAME_CREATED: {
      return Object.assign({}, state, {[action.payload.id]: action.payload});
    }
    case HANGMAN_GUESS_SUBMITTED: {
      const newGame = state[action.payload.id];
      const newGameState = Object.assign({}, newGame, action.payload);
      return Object.assign({}, state, {[newGame.id]: newGameState});
    }
    case RPS_GUESS_SUBMITTED: {
      const newGame = state[action.payload.id];
      const newGameState = Object.assign({}, newGame, action.payload);
      return Object.assign({}, state, {[newGame.id]: newGameState});
    }
    default:
      return state;
  }
};

export default gameReducer;
