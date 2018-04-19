import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';

let store = createStore(
  reducer,
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.subscribe(() => {
  console.log('Got new state', store.getState()); // eslint-disable-line no-console
});
