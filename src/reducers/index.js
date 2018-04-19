import {
  NEW_GAME_BUTTON_SUBMITTED,
} from '../actions/index.js';

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
    default:
      return state;
  }
};

export default gameReducer;
