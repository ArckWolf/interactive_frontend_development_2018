import {connect} from 'react-redux';
import CreateLoginButtons from '../components/CreateLoginButtons';
import {logInRequested} from '../actions';
// import {start as startWebsocketExample}
//   from '../WebsocketBasicsExample';

const mapDispatchToProps = (dispatch) => ({
  loginUser: (type) => dispatch(logInRequested(type))
});

const mapStateToProps = ({loginRequestInFlight}) => ({
  createRequestInFlight: loginRequestInFlight
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateLoginButtons);
