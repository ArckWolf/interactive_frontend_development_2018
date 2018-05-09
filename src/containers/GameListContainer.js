import GameList from '../components/GameList';
import {connect} from 'react-redux';

const mapStateToProps = ({gameReducer}, ownProps) => ({
  games: Object.values(gameReducer.games).sort((id1, id2) => id1 - id2),
  show: ownProps.finished,
});

const mapDispatchToProps = (dispatch) => ({
  onRequestComments: () => dispatch()
});

export default connect(mapStateToProps, mapDispatchToProps)(GameList);
