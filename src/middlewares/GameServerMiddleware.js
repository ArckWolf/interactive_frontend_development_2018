// Note that the Fetch API is not supported in every browser and may need to be
// polyfilled in production code:
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

import {
  POST_NEW_RPS_GAME_REQUEST,
  postNewRpsGameSucceeded,
  postNewRpsGameFaild,

  POST_NEW_HANGMAN_GAME_REQUEST,
  postNewHangmanGameSucceeded,
  postNewHangmanGameFaild,

  POST_RPS_GUESS_REQUEST,
  postRpsGuessSuceeded,
  postRpsGuessFaild,

  POST_HANGMAN_GUESS_REQUEST,
  postHangmanGuessSuceeded,
  postHangmanGuessFaild
} from '../actions/index';

const GUESS_CHAR_TO_GUESS = {
  'R': 'ROCK',
  'P': 'PAPER',
  'S': 'SCISSORS'
};

const SERVER_ADDRESS = 'http://localhost:8081';

export const postHangmanGuess = (id, gameServerID, letter, fetch = window.fetch) => {
  return (dispatch) => {
    return fetch(
      SERVER_ADDRESS + '/games/' + gameServerID + '/moves',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({guess: letter})
      },
    ).then((response) => {
       if (response.ok) {
        response.json().then(
          (game) => dispatch(postHangmanGuessSuceeded({id, game})),
          (error) => dispatch(postHangmanGuessFaild({id, error: 'Unparseable response'}))
        );
      } else {
        response.json().then(
          ({error}) => dispatch(postHangmanGuessFaild({id, error: error})),
          (error) => dispatch(postHangmanGuessFaild({id, error: 'Unparseable response'}))
        );
      }
    }).catch((error) => {
      dispatch(dispatch(postHangmanGuessFaild({id, error: 'Service unreachable'})));
    });
  };
};

export const postRpsGuess = (id, gameServerID, letter, fetch = window.fetch) => {
  return (dispatch) => {
    return fetch(
      SERVER_ADDRESS + '/games/' + gameServerID + '/moves',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({guess: GUESS_CHAR_TO_GUESS[letter]})
      },
    ).then((response) => {
       if (response.ok) {
        response.json().then(
          (game) => dispatch(postRpsGuessSuceeded({id, game})),
          (error) => dispatch(postRpsGuessFaild({id, error: 'Unparseable response'}))
        );
      } else {
        response.json().then(
          ({error}) => dispatch(postRpsGuessFaild({id, error: error})),
          (error) => dispatch(postRpsGuessFaild({id, error: 'Unparseable response'}))
        );
      }
    }).catch((error) => {
      dispatch(dispatch(postRpsGuessFaild({id, error: 'Service unreachable'})));
    });
  };
};

export const postNewRpswGame = (id, fetch = window.fetch) => {
  return (dispatch) => {
    return fetch(
      SERVER_ADDRESS + '/games/',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({type: 'rps'})
      },
    ).then((response) => {
       if (response.ok) {
        response.json().then(
          (game) => dispatch(postNewRpsGameSucceeded({id, game})),
          (error) => dispatch(postNewRpsGameFaild({id, error: 'Unparseable response'}))
        );
      } else {
        response.json().then(
          ({error}) => dispatch(postNewRpsGameFaild({id, error: error})),
          (error) => dispatch(postNewRpsGameFaild({id, error: 'Unparseable response'}))
        );
      }
    }).catch((error) => {
      dispatch(dispatch(postNewRpsGameFaild({id, error: 'Service unreachable'})));
    });
  };
};

export const postNewHangmanwGame = (id, fetch = window.fetch) => {
  return (dispatch) => {
    return fetch(
      SERVER_ADDRESS + '/games/',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({type: 'hangman'})
      },
    ).then((response) => {
       if (response.ok) {
        response.json().then(
          (game) => dispatch(postNewHangmanGameSucceeded({id, game})),
          (error) => dispatch(postNewHangmanGameFaild({id, error: 'Unparseable response'}))
        );
      } else {
        response.json().then(
          ({error}) => dispatch(postNewHangmanGameFaild({id, error: error})),
          (error) => dispatch(postNewHangmanGameFaild({id, error: 'Unparseable response'}))
        );
      }
    }).catch((error) => {
      dispatch(dispatch(postNewHangmanGameFaild({id, error: 'Service unreachable'})));
    });
  };
};

const gameServerMiddleware = (store) => (next) => {
  return (action) => {
    if (action.type === POST_NEW_HANGMAN_GAME_REQUEST) {
      store.dispatch(postNewHangmanwGame(action.payload.id));
    } else if (action.type === POST_NEW_RPS_GAME_REQUEST) {
      store.dispatch(postNewRpswGame(action.payload.id));
    } else if (action.type === POST_RPS_GUESS_REQUEST) {
      store.dispatch(postRpsGuess(action.payload.id, action.payload.gameServerId, action.payload.guess));
    } else if (action.type === POST_HANGMAN_GUESS_REQUEST) {
      store.dispatch(postHangmanGuess(action.payload.id, action.payload.gameServerId, action.payload.guess));
    }
    return next(action);
  };
};

export default gameServerMiddleware;
