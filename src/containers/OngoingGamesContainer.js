import {connect} from 'react-redux';
import GameList from '../components/GameList';
import {postRpsGuess, postHangmanGuess} from '../actions/GameServerActions';


const mapStateToProps = (state) => ({
  games: Object.values(state)
});

const mapDispatchToProps = (dispatch) => {
  const newLocal = {
    submitHangman: (gameId, letter) => dispatch(postHangmanGuess(gameId, letter)),
    submitRPS: (gameId, letter) => dispatch(postRpsGuess(gameId, letter))
  };
  return newLocal;
};

export default connect(mapStateToProps, mapDispatchToProps)(GameList);
