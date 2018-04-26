// Note that the Fetch API is not supported in every browser and may need to be
// polyfilled in production code:
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

import {
  postNewRpsGameRequest,
  postNewRpsGameSucceeded,
  postNewRpsGameFaild,

  postNewHangmanGameRequest,
  postNewHangmanGameSucceeded,
  postNewHangmanGameFaild,

  postRpsGuessRequest,
  postRpsGuessSuceeded,
  postRpsGuessFaild,

  postHangmanGuessRequest,
  postHangmanGuessSuceeded,
  postHangmanGuessFaild
} from './index';

const GUESS_CHAR_TO_GUESS = {
  'R': 'ROCK',
  'P': 'PAPER',
  'S': 'SCISSORS'
};

const SERVER_ADDRESS = 'http://localhost:8081';

export const postHangmanGuess = (id, gameServerID, letter, fetch = window.fetch) => {
  return (dispatch) => {
    const requestAction = postHangmanGuessRequest(id);
    dispatch(requestAction);
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
    const requestAction = postRpsGuessRequest(id);
    dispatch(requestAction);
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
    const requestAction = postNewRpsGameRequest();
    dispatch(requestAction);
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
    const requestAction = postNewHangmanGameRequest();
    dispatch(requestAction);
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
