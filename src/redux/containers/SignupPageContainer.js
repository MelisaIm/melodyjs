import { lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import loginProcess from '../thunks/loginProcess';

import SignupPage from '../../components/Login/SignupPage';

function mapStateToProps(state) {
	return {};
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		onSubmit: (userName, password) => {
			dispatch(loginProcess(userName, password));
		}
	};
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const addLifecycle = lifecycle({
	componentDidMount() {}
});

export default connectToStore(addLifecycle(SignupPage));
