import { connect } from 'react-redux';
import SoundStudioPage from '../../components/SoundStudioView/SoundStudioPage';
import getSongProcess from '../thunks/getSongProcess';
import updateSongProcess from '../thunks/updateSongProcess';
import deleteSongProcess from '../thunks/deleteSongProcess';
import createSongProcess from '../thunks/createSongProcess';
import melodyToString from '../../requests/utils/melodyToString';
import getSongsProcess from '../thunks/getSongsProcess';
import { withRouter } from 'react-router-dom';

import { compose, lifecycle } from 'recompose';

function mapStateToProps(state, ownProps) {
	return {
		playingChord: state.playingChord,
		songId: ownProps.songId,
		song: state.song,
		notes: [
			'C5',
			'B4',
			'A4',
			'G4',
			'F4',
			'E4',
			'D4',
			'C4',
			'B3',
			'A3',
			'G3',
			'F3',
			'E3',
			'D3',
			'C3'
		],
		instruments: ['Synth'],
		data: state.data
	};
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		onMount: () => {
			dispatch(getSongsProcess());
			dispatch({ type: 'CLEAR_SORTED' });

			ownProps.songId
				? dispatch(getSongProcess(ownProps.songId))
				: dispatch({ type: 'CLEAR_PAGE' });
		},
		onReceiveProps: nextProps => {
			nextProps.songId
				? dispatch(getSongProcess(nextProps.songId))
				: dispatch({ type: 'CLEAR_PAGE' });
		},
		chooseInstrument: instrument => {},
		onClear: id => {
			if (id) {
				dispatch(getSongProcess(id));
			} else {
				dispatch({ type: 'CLEAR_ALL' });
			}
		},
		onSave: (song, id, history) => {
			if (id) {
				const update = melodyToString(song.melody);
				song = { ...song, melody: update };
				dispatch(updateSongProcess(id, song));
			} else {
				dispatch(createSongProcess(song, history));
			}
		},
		updateSongLocally: newSong => {
			dispatch({ type: 'UPDATE_MELODY', melody: newSong });
		},
		onDelete: (songId, history) => {
			dispatch(deleteSongProcess(songId, history));
			dispatch({ type: 'CLEAR_PAGE' });
		},
		onEditForm: changes => {
			if (changes.title !== undefined) {
				dispatch({ type: 'CHANGE_TITLE', title: changes.title });
			} else {
				dispatch({ type: 'CHANGE_DESCRIPTION', description: changes.description });
			}
		},
		passChord: chord => {
			dispatch({ type: 'PASS_CHORD', chord });
		}
	};
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withLifeCycle = lifecycle({
	componentDidMount() {
		this.props.onMount();
	},
	componentWillReceiveProps(nextProps) {
		if (this.props.songId !== nextProps.songId) this.props.onReceiveProps(nextProps);
	}
});

export default compose(connectToStore, withLifeCycle)(withRouter(SoundStudioPage));
