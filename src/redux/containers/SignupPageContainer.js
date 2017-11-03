// import { lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import signupProcess from '../thunks/signupProcess';

import SignupPage from '../../components/Login/SignupPage';

function mapStateToProps(state) {
	return {
		loggedUser: state.loggedUser
	};
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		onSubmit: ({ userName, password, email, history }) => {
			dispatch(signupProcess({ userName, password, email }, history));
		}
	};
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

// const addLifecycle = lifecycle({
// 	componentDidMount() {}
// });

export default connectToStore(withRouter(SignupPage));
