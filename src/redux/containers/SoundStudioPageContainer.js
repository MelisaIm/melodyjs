import { connect } from 'react-redux';
import SoundStudioPage from '../../components/SoundStudioView/SoundStudioPage';
import getSongsProcess from '../thunks/getSongsProcess';
import getSongProcess from '../thunks/getSongProcess';
import updateSongProcess from '../thunks/updateSongProcess';
import deleteSongProcess from '../thunks/deleteSongProcess';
import createSongProcess from '../thunks/createSongProcess';


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
		chooseInstrument: instrument => {
			console.log(instrument);
		},
		onClear: id => {
			if (id) {
				dispatch(getSongProcess(id));
			} else {
				dispatch({ type: 'CLEAR_ALL' });
			}
		},
		onSave: (song, id) => {
			if (id) {
        // updatesong thunk

				const update = melodyToString(song.melody);
				song = { ...song, melody: update };
				updateSong(id, song, {
					databaseId: 'appxhHjmck1PuVaSU',
					token: 'keymBy1TajObCCmUW'
				}).then(song => {
					this.props.updateData();
					this.setState({ song: song });
				});
			} else {
        createSong(song, {
          databaseId: 'appxhHjmck1PuVaSU',
          token: 'keymBy1TajObCCmUW'
        }).then(song => {
          console.log(song);
          this.props.updateData();
          this.setState({ song: song });
        });
      }
			}
		},
		onDelete: songId => {},
		updateSongLocally: newSong => {},
		onEditForm: changes => {
			if (changes.title !== undefined) {
				// dispatch CHANGE_TITLE
				dispatch({ type: 'CHANGE_TITLE', title: changes.title });
			} else {
				// dispatch CHANGE_DESCRIPTION
				dispatch({ type: 'CHANGE_DESCRIPTION', description: changes.description });
			}
		}
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
