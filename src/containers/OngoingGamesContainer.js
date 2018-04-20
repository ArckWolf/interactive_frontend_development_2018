import {connect} from 'react-redux';
import GameList from '../components/GameList';
import {submitHangman, submitRPS} from '../actions';


const mapStateToProps = (state) => ({
  games: Object.values(state)
});

const mapDispatchToProps = (dispatch) => {
  const newLocal = {
    submitHangman: (gameId, letter) => dispatch(submitHangman(gameId, letter)),
    submitRPS: (gameId, letter) => dispatch(submitRPS(gameId, letter))
  };
  return newLocal;
};

export default connect(mapStateToProps, mapDispatchToProps)(GameList);
