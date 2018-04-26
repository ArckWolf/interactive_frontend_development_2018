import {
  POST_NEW_HANGMAN_GAME_REQUEST,
  POST_NEW_HANGMAN_GAME_SUCCEEDED,
  POST_NEW_HANGMAN_GAME_FAILD,
  POST_NEW_RPS_GAME_REQUEST,
  POST_NEW_RPS_GAME_SUCCEEDED,
  POST_NEW_RPS_GAME_FAILD,
  POST_RPS_GUESS_REQUEST,
  POST_RPS_GUESS_FAILD,
  POST_RPS_GUESS_SUCSEEDED,
  POST_HANGMAN_GUESS_REQUEST,
  POST_HANGMAN_GUESS_SUCSEEDED,
  POST_HANGMAN_GUESS_FAILD
} from '../actions/index.js';

const initialState = {};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_NEW_RPS_GAME_REQUEST: {
      const newGame = {
        id: action.payload.id,
        type: 'rps',
        moves: [],
        fetchGameState: {inFlight: true},
        fetchGuessState: {inFlight: false}
      };
      return Object.assign({}, state, {[action.payload.id]: newGame});
    }
    case POST_NEW_RPS_GAME_SUCCEEDED: {
      const newGame = {
        id: action.payload.id,
        type: 'rps',
        status: action.payload.game.status,
        won: action.payload.game.won,
        moves: [],
        fetchGameState: {inFlight: false},
        fetchGuessState: {inFlight: false}
      };
      return Object.assign({}, state, {[action.payload.id]: newGame});
    }
    case POST_NEW_RPS_GAME_FAILD: {
      const game = state[action.payload.id];
      const newState = {
        fetchGameState: {
          inFlight: false,
          error: action.payload.error
        }
      };
      const newGameState = Object.assign({}, game, newState);
      return Object.assign({}, state, {[game.id]: newGameState});
    }
    case POST_NEW_HANGMAN_GAME_REQUEST: {
      const newGame = {
        id: action.payload.id,
        type: 'hangman',
        wordView: '',
        wrongCounter: 0,
        fetchGameState: {inFlight: true},
        fetchGuessState: {inFlight: false}
      };
      return Object.assign({}, state, {[action.payload.id]: newGame});
    }
    case POST_NEW_HANGMAN_GAME_SUCCEEDED: {
      let newWordView = '';

      for (let index = 0; index < action.payload.game.letters.length; index++) {
        if (action.payload.game.letters[index] == undefined) {
          newWordView += '_';
        } else {
          newWordView += action.payload.game.letters[index];
        }
      }
      const newGame = {
        id: action.payload.id,
        type: 'hangman',
        status: action.payload.game.status,
        won: action.payload.game.won,
        wrongCounter: action.payload.game.wrongGuessCount,
        wordView: newWordView,
        fetchGameState: {inFlight: false},
        fetchGuessState: {inFlight: false}
      };
      return Object.assign({}, state, {[action.payload.id]: newGame});
    }
    case POST_NEW_HANGMAN_GAME_FAILD: {
      const game = state[action.payload.id];
      const newState = {
        fetchGameState: {
          inFlight: false,
          error: action.payload.error
        }
      };
      const newGameState = Object.assign({}, game, newState);
      return Object.assign({}, state, {[game.id]: newGameState});
    }
    case POST_RPS_GUESS_REQUEST: {
      const game = state[action.payload.id];
      const newState = {
        fetchGuessState: {inFlight: true}
      };
      const newGameState = Object.assign({}, game, newState);
      return Object.assign({}, state, {[game.id]: newGameState});
    }
    case POST_RPS_GUESS_SUCSEEDED: {
      const game = state[action.payload.id];
      const newMoves = game.moves.concat(action.payload.game.move);
      const newState = {
        status: action.payload.game.status,
        won: action.payload.game.won,
        moves: newMoves,
        fetchGuessState: {inFlight: false}
      };
      const newGameState = Object.assign({}, game, newState);
      return Object.assign({}, state, {[game.id]: newGameState});
    }
    case POST_RPS_GUESS_FAILD: {
      const game = state[action.payload.id];
      const newState = {
        fetchGuessState: {
          inFlight: false,
          error: action.payload.error
        }
      };
      const newGameState = Object.assign({}, game, newState);
      return Object.assign({}, state, {[game.id]: newGameState});
    }
    case POST_HANGMAN_GUESS_REQUEST: {
      const game = state[action.payload.id];
      const newState = {
        fetchGuessState: {inFlight: true}
      };
      const newGameState = Object.assign({}, game, newState);
      return Object.assign({}, state, {[game.id]: newGameState});
    }
    case POST_HANGMAN_GUESS_SUCSEEDED: {
      const game = state[action.payload.id];
      let newWordView = '';
      for (let index = 0; index < action.payload.game.letters.length; index++) {
        if (action.payload.game.letters[index] == undefined) {
          newWordView += '_';
        } else {
          newWordView += action.payload.game.letters[index];
        }
      }
      const newState = {
        status: action.payload.game.status,
        won: action.payload.game.won,
        wrongCounter: action.payload.game.wrongGuessCount,
        wordView: newWordView,
        fetchGuessState: {inFlight: false}
      };
      const newGameState = Object.assign({}, game, newState);
      return Object.assign({}, state, {[game.id]: newGameState});
    }
    case POST_HANGMAN_GUESS_FAILD: {
      const game = state[action.payload.id];
      const newState = {
        fetchGuessState: {
          inFlight: false,
          error: action.payload.error
        }
      };
      const newGameState = Object.assign({}, game, newState);
      return Object.assign({}, state, {[game.id]: newGameState});
    }
    default:
      return state;
  }
};

export default gameReducer;
