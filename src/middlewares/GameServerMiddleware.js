import {
  postNewRpsGameRequest,
 /* postNewRpsGameSucceeded,
  postNewRpsGameFaild,

  postRpsGuessRequest,
  postRpsGuessSuceeded,
  postRpsGuessFaild,

  postNewHangmanGameRequest,
  postNewHangmanGameSucceeded,
  postNewHangmanGameFaild,

  postHangmanGuessRequest,
  postHangmanGuessSuceeded,
  postHangmanGuessFaild*/
} from '../actions';

const SERVER_ADDRESS = 'http://localhost:8081';

// Define one method which executes the asynchronous process
export const postNewGame = (fetch = window.fetch) => {
  console.log('data//////////////.....'); // eslint-disable-line
  const type = {type: 'rps'};
  return (dispatch) => {
    const requestAction = postNewRpsGameRequest({type});
    dispatch(requestAction);
    // const localId = requestAction.payload.localId;
    return fetch(
      SERVER_ADDRESS + '/games/',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({type})
      },
    ).then((response) => {
      console.log('responce//////////////.....'); // eslint-disable-line
      console.log(response); // eslint-disable-line
      /* if (response.ok) {
        response.json().then(
          ({id}) => dispatch(postCommentSucceeded({localId, id})),
          (error) => dispatch(postCommentFailed({localId, error: 'Unparseable response'}))
        );
      } else {
        response.json().then(
          ({error}) => dispatch(postCommentFailed({localId, error: error})),
          (error) => dispatch(postCommentFailed({localId, error: 'Unparseable response'}))
        );
      }*/
    }).catch((error) => {
      console.log('error//////////////.....'); // eslint-disable-line
      console.log(error); // eslint-disable-line
      /* dispatch(dispatch(postCommentFailed({localId, error: 'Service unreachable'})));*/
    });
  };
};


const commentServerMiddleware = (store) => (next) => {
  return (action) => {
    console.log('commentServerMiddleware//////////////.....'); // eslint-disable-line
    console.log(action); // eslint-disable-line

    store.dispatch(postNewGame());
    return next(action);
  };
};

export default commentServerMiddleware;
