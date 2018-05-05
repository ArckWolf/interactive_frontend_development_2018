import GameReducer from './GameReducer';
import LoginReducer from './LoginReducer';

import {combineReducers} from 'redux';

export default combineReducers({
  gameReducer: GameReducer,
  loginReducer: LoginReducer
});
