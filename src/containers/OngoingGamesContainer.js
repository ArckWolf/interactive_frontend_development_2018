import {connect} from 'react-redux';
import GameList from '../components/GameList';
import {postRpsGuessRequest, postHangmanGuessRequest} from '../actions';


const mapStateToProps = (state) => ({
  games: Object.values(state)
});

const mapDispatchToProps = (dispatch) => {
  const newLocal = {
    submitHangman: (gameId, letter) => dispatch(postHangmanGuessRequest(gameId, letter)),
    submitRPS: (gameId, letter) => dispatch(postRpsGuessRequest(gameId, letter))
  };
  return newLocal;
};

export default connect(mapStateToProps, mapDispatchToProps)(GameList);
