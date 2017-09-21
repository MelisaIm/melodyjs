import { connect } from 'react-redux';
import SoundStudioPageLayout from '../../components/SoundStudioView/SoundStudioPageLayout';
import getSongsProcess from '../thunks/getSongsProcess';
import { compose, lifecycle } from 'recompose';

function mapStateToProps(state) {
	return { ...state };
}

function mapDispatchToProps(dispatch) {
	return {
		onMount: () => {
			dispatch(getSongsProcess());
		},
		chooseInstrument: instrument => {},
		onClear: id => {},
		onSave: (song, id) => {},
		onDelete: songId => {}
	};
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withLifeCycle = lifecycle({
	componentDidMount() {
		this.props.onMount();
	},
	componentWillReceiveProps(nextProps) {}
});

export default compose(connectToStore, withLifeCycle)(SoundStudioPageLayout);
