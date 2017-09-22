import { connect } from 'react-redux';
import LibraryPage from '../../components/LibraryView/LibraryPage';
import getSongsProcess from '../thunks/getSongsProcess';
import { compose, lifecycle } from 'recompose';
// import sortSongsProcess from '../thunks/sortSongsProcess';

function mapStateToProps(state) {
	return { data: state.data, song: state.song, sortedSongs: state.sortedSongs };
}

function mapDispatchToProps(dispatch) {
	return {
		onMount: () => {
			dispatch(getSongsProcess());
		},
		sortAlphabetically: (songs, order) => {
			dispatch(getSongsProcess());

			if (order === 'A-Z') {
				const newsongs = songs.slice().sort((a, b) => {
					let songA = a.info.title.toUpperCase();
					let songB = b.info.title.toUpperCase();
					if (songA < songB) return -1;
					if (songA > songB) return 1;
					return 0;
				});
				dispatch({ type: 'SORTED_SONGS', newsongs });
			} else {
				dispatch(getSongsProcess());

				// sortByDate: songs => {
				// 	dispatch(
				// 		sortSongsProcess('?sort%5B0%5D%5Bfield%5D=createdTime&sort%5B0%5D%5Bdirection%5D=asc')
				// 	);
				// }
				const newsongs = songs.slice().sort((b, a) => {
					let songA = a.info.title.toUpperCase();
					let songB = b.info.title.toUpperCase();
					if (songA < songB) return -1;
					if (songA > songB) return 1;
					return 0;
				});

				dispatch({ type: 'SORTED_SONGS', newsongs });
			}
		},
		filterSongs: (songs, searchQuery) => {
			if (searchQuery) {
				const newsongs = songs.filter(song =>
					song.info.title.toUpperCase().includes(searchQuery.toUpperCase())
				);
				dispatch({ type: 'SORTED_SONGS', newsongs });
				dispatch(getSongsProcess());
			} else {
				dispatch(getSongsProcess());
				dispatch({ type: 'CLEAR_SORTED' });
			}
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
