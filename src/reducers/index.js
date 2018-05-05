/* eslint-disable */
import {
  CREATE_GAME_REQUESTED,
  CREATE_GAME_SUCCEEDED,
  CREATE_GAME_FAILED,
  GAME_GUESS_REQUESTED,
  GAME_GUESS_SUCCEEDED,
  GAME_GUESS_FAILED,
  LOG_IN_REQUESTED,
  LOG_IN_FAILED,
  LOG_IN_SUCCEEDED,
  LOG_OUT_REQUESTED,
  LOG_OUT_SUCCEEDED,
  MESSAGE_RECEIVED
} from '../actions';

const initialState = {
  games: {},
  createGameRequestInFlight: false,
  logInRequestInFlight: false,
  logOutRequestInFlight: false,
  playerId: '',
  error: '',
  players: {}
};
const reducer = (state = initialState, action) => {
  if (action.type === CREATE_GAME_REQUESTED) {
    return Object.assign({}, state, {createGameRequestInFlight: true});
  } else if (action.type === CREATE_GAME_FAILED) {
    return Object.assign({}, state, {createGameRequestInFlight: false});
  } else if (action.type === CREATE_GAME_SUCCEEDED) {
    let game;
    if (action.payload.type === 'rps') {
      game = Object.assign({}, action.payload, {moves: []});
    } else {
      game = action.payload;
    }
    return Object.assign({}, state, {games: Object.assign({}, state.games, {[game.id]: game}), 
                                      createGameRequestInFlight: false});
  } else if (action.type === GAME_GUESS_REQUESTED) {
    const {gameId} = action.payload;
    const gameState = state.games[gameId];
    const newGameState = Object.assign({}, gameState, {status: 'guess_in_flight'});
    const newGames = Object.assign({}, state.games, {[gameId]: newGameState});
    return Object.assign({}, state, {games: newGames});
  } else if (action.type === GAME_GUESS_FAILED) {
    const {gameId} = action.payload;
    const gameState = state.games[gameId];
    const newGameState = Object.assign({}, gameState, {status: 'waiting_for_move'});
    const newGames = Object.assign({}, state.games, {[gameId]: newGameState});
    return Object.assign({}, state, {games: newGames});
  } else if (action.type === GAME_GUESS_SUCCEEDED) {
    const actionGameState = action.payload;
    let newGameState;

    if (actionGameState.type === 'rps') {
      const move = actionGameState.move;
      newGameState = {
        id: actionGameState.id,
        type: actionGameState.type,
        status: actionGameState.status,
        moves: state.games[actionGameState.id].moves.concat(move)
      };
    } else if (actionGameState.type === 'hangman') {
      newGameState = {
        id: actionGameState.id,
        type: actionGameState.type,
        status: actionGameState.status,
        wrongGuessCount: actionGameState.wrongGuessCount,
        letters: actionGameState.letters
      };
    }
    const newGames = Object.assign({}, state.games, {[newGameState.id]: newGameState});
    return Object.assign({}, state, {games: newGames});
  } else if (action.type === LOG_IN_REQUESTED) {
    return Object.assign({}, state, {logInRequestInFlight: true});
  } else if (action.type === LOG_IN_FAILED) {
    return Object.assign({}, state, {logInRequestInFlight: false, error: action.payload});
  } else if (action.type === LOG_IN_SUCCEEDED) {
    return Object.assign({}, state, {logInRequestInFlight: false});
  } else if (action.type === LOG_OUT_REQUESTED) {
    return Object.assign({}, state, {logOutRequestInFlight: true});
  } else if (action.type === LOG_OUT_SUCCEEDED) {
    return Object.assign({}, state, {logOutRequestInFlight: false, playerId: '', games: {}});

  } else if (action.type === MESSAGE_RECEIVED) {
    console.log('-------------------------MESSAGE------------------------------');
    console.log(action);
    if (action.payload.eventName === 'connection:accepted') {
      return Object.assign({}, state, {playerId: action.payload.payload.playerId});
    } else if (action.payload.eventName === 'connection:player-name-taken') {
      return Object.assign({}, state, {error: action.payload.payload.reason});
    } else if (action.payload.eventName === 'online-players') {
      return Object.assign({}, state, {players: action.payload.payload});
    }
  }
  return state;
};

export default reducer;
