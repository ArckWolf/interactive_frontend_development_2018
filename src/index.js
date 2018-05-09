import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import gameServerMiddleware from './middlewares/GameServerMiddleware';
import loginMiddleware from './middlewares/LoginMiddleware';
import loggingMiddleware from './middlewares/LoggingMiddleware';


const composeStoreEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  reducer,
  composeStoreEnhancers(
    applyMiddleware(
      thunk,
      loginMiddleware(),
      gameServerMiddleware(),
      loggingMiddleware
    )
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App history={history}/>
  </Provider>,
  document.getElementById('root')
);
