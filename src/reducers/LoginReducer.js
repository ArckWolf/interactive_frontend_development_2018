/* eslint-disable */
import {
    LOG_IN_REQUESTED,
    LOG_IN_FAILED,
    LOG_IN_SUCCEEDED,
    LOG_OUT_REQUESTED,
    LOG_OUT_SUCCEEDED,
    MESSAGE_RECEIVED
  } from '../actions';
  
  const initialState = {
    logInRequestInFlight: false,
    logOutRequestInFlight: false,
    playerId: '',
    error: '',
    players: {}
  };
  const reducer = (state = initialState, action) => {
    if (action.type === LOG_IN_REQUESTED) {
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
  