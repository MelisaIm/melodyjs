import { lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import loginProcess from '../thunks/loginProcess';
import logOutProcess from '../thunks/logoutProcess';
import LoginPage from '../../components/Login/LoginPage';

function mapStateToProps(state) {
	return { loggedUser: state.loggedUser };
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		onSubmit: ({ userName, password, history }) => {
			dispatch(loginProcess({ userName, password }, history));
		}
		// ,
		// onLogOut: loggedUser => {
		// 	logOutProcess(loggedUser);
		// }
	};
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withLifeCycle = lifecycle({
	componentDidMount(props) {
		console.log(props);
	}
});

export default connectToStore(withRouter(withLifeCycle(LoginPage)));
// export default connectToStore(withRouter(LoginPage));
