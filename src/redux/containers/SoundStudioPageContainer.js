import { connect } from 'react-redux';
import SoundStudioPage from '../../components/SoundStudioView/SoundStudioPage';
import getSongsProcess from '../thunks/getSongsProcess';
import { compose, lifecycle } from 'recompose';

function mapStateToProps(state) {
	console.log(state);
	return { ...state };
}

function mapDispatchToProps(dispatch) {
	return {
		onMount: () => {
			dispatch(getSongsProcess());
		},
		onReceiveProps: () => {},
		chooseInstrument: instrument => {},
		onClear: id => {},
		onSave: (song, id) => {},
		onDelete: songId => {},
		updateSongLocally: newSong => {},
		onEditForm: changes => {}
	};
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withLifeCycle = lifecycle({
	componentDidMount() {
		this.props.onMount();
	}
	// componentWillReceiveProps(nextProps) {
	//   this.props.onReceiveProps();
	// }
});

export default compose(connectToStore, withLifeCycle)(SoundStudioPage);
