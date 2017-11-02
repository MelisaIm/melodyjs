import { lifecycle, compose } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import loginProcess from '../thunks/loginProcess';

import LoginPage from '../../components/Login/LoginPage';

function mapStateToProps(state) {
	return { authenticatedUser: state.authenticatedUser };
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		onSubmit: (userName, password) => {
			dispatch(loginProcess(userName, password), ownProps.history);
		}
	};
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

// const withLifeCycle = lifecycle({
// 	componentDidMount() {}
// });

// export default connectToStore(addLifecycle(LoginPage));
export default compose(connectToStore)(withRouter(LoginPage));
