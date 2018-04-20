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
      return Object.assign({}, {[action.payload.id]: action.payload});
    }
    case RPS_GAME_CREATED: {
      console.log('----RPS_GAME_CREATED----'); // eslint-disable-line no-console
      console.log(state); // eslint-disable-line no-console
      console.log(action); // eslint-disable-line no-console
      return Object.assign({}, {[action.payload.id]: action.payload});
    }
    case HANGMAN_GUESS_SUBMITTED: {
      console.log('----5HANGMAN_GUESS_SUBMITTED5----'); // eslint-disable-line no-console
      console.log(action); // eslint-disable-line no-console
      console.log(state); // eslint-disable-line no-console
      const newGame = state[action.payload.id];
      const newGameState = Object.assign({}, newGame, action.payload);
      return Object.assign({}, {[newGame.id]: newGameState});
    }
    case RPS_GUESS_SUBMITTED: {
      console.log('----RPS_GUESS_SUBMITTED----'); // eslint-disable-line no-console
      console.log(state); // eslint-disable-line no-console
      const newGame = state[action.payload.id];
      const newGameState = Object.assign({}, newGame, action.payload);
      return Object.assign({}, {[newGame.id]: newGameState});
    }
    default:
      return state;
  }
};

/*
 * {
 *  id:
 *  state:
 *  type:
 *
 *  moves: -rps only
 *  wordView - hangman only
 *  wrongCounter - hangman only
 * }
 */

export default gameReducer;
