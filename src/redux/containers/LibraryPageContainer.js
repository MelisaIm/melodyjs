import { connect } from 'react-redux';
import LibraryPage from '../../components/LibraryView/LibraryPage';
import getSongsProcess from '../thunks/getSongsProcess';
import { compose, lifecycle } from 'recompose';

function mapStateToProps(state) {
	return { ...state };
}

function mapDispatchToProps(dispatch) {
	return {
		onMount: () => {
			dispatch(getSongsProcess());
		}
	};
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withLifeCycle = lifecycle({
	componentDidMount() {
		this.props.onMount();
	}
});

export default compose(connectToStore, withLifeCycle)(LibraryPage);
// export default connectToStore(withLifeCycle(LibraryPage));
