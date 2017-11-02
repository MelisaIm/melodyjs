import { branch, lifecycle, renderComponent } from 'recompose';
import { connect } from 'react-redux';
import ErrorPage from '../../components/NotFoundPage';

import LoginPage from '../../components/LoginPage';

function mapStateToProps(state) {
	return {};
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		onSubmit: (userName, password) => {
			dispatch();
		}
	};
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const addLifecycle = lifecycle({
	componentDidMount() {}
});

export default connectToStore(addLifecycle(LoginPage));
