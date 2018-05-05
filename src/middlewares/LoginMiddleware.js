/* eslint-disable */
import {
  LOG_IN_REQUESTED,
  LOG_IN_FAILED,
  LOG_IN_SUCCEEDED
} from '../actions';

let webSocketConnection = null;
import {connect as connectWebSocket} from '../WebSocket';

export default (fetch = window.fetch) => (store) => (next) => {
  return (action) => {
    next(action);

    if (action.type === LOG_IN_REQUESTED) {
      console.log('LOG_IN_REQUESTED++');
      console.log(action);
     return webSocketConnection = connectWebSocket({
        onOpen: () =>
          store.dispatch({type: LOG_IN_SUCCEEDED}),
        onClose: ({reason}) =>{
          console.log('onClose> ');
          console.log(reason);
          store.dispatch({type: LOG_IN_FAILED, payload: {reason}})
        },
        onMessage: (inf) => {
          console.log('onMessage> ');
          console.log(inf);
          
          if (inf.eventName === 'player-name-taken') {
            webSocketConnection.close();
            setTimeout(() => initiateConnection(), 100);
          }
        },
        parameters: {playerName: action.payload}
      });
    }
  };
};
