import {
  NEW_GAME_BUTTON_SUBMITTED,
  RPS_GAME_CREATED,
  HANGMAN_GAME_CREATED
} from '../actions/index.js';

import RPS from '../games/RPS';
import Hangman from '../games/Hangman';

const initialGames = [];
const initialType = '';
const initialPlay = '';

const initialState = {
  games: initialGames,
  type: initialType,
  play: initialPlay
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_GAME_BUTTON_SUBMITTED: {
      const newGame = state.games.concat({
        id: action.payload.id,
        type: action.payload.type,
        play: action.payload.play
      });
      return {...state, games: newGame, type: '', play: ''};
    }
    case HANGMAN_GAME_CREATED: {
      const newGame = state.games.concat({
        id: action.payload.id,
        type: 'Hangman',
        play: new Hangman()
      });
      return {...state, games: newGame, type: '', play: ''};
    }
    case RPS_GAME_CREATED: {
      const newGame = state.games.concat({
        id: action.payload.id,
        type: 'RPS',
        play: new RPS()
      });
      return {...state, games: newGame, type: '', play: ''};
    }
    default:
      return state;
  }
};

export default gameReducer;
