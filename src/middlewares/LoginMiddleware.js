/* eslint-disable */
import {
  LOG_IN_REQUESTED,
  LOG_IN_FAILED,
  LOG_IN_SUCCEEDED,
  LOG_OUT_REQUESTED,
  LOG_OUT_SUCCEEDED,
  MESSAGE_RECEIVED
} from '../actions';

let webSocketConnection = null;
import {connect as connectWebSocket} from '../WebSocket';

export default (fetch = window.fetch) => (store) => (next) => {
  return (action) => {
    next(action);

    if (action.type === LOG_IN_REQUESTED) {
      webSocketConnection = connectWebSocket({
        onOpen: () =>
          store.dispatch({type: LOG_IN_SUCCEEDED}),
        onClose: ({reason}) =>{
          if(reason == ''){
            store.dispatch({type: LOG_OUT_SUCCEEDED, payload: reason})            
          }
          else{
            store.dispatch({type: LOG_IN_FAILED, payload: reason})
          }
        },
        onMessage: (message) => {
          store.dispatch({type: MESSAGE_RECEIVED, payload: message})            
          
          if (message.eventName === 'player-name-taken') {
            webSocketConnection.close();
          }
        },
        parameters: {playerName: action.payload}
      });
    }else if(action.type === LOG_OUT_REQUESTED){
      webSocketConnection.close();
    }
  };
};
