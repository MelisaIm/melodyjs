import createSong from '../../requests/createSong';

export default function createSongProcess(song) {
	return (dispatch, getState) => {
		return createSong(song, {
			databaseId: 'appxhHjmck1PuVaSU',
			token: 'keymBy1TajObCCmUW'
		}).then(song => {
			dispatch({ type: 'CREATE_SONG', song });
			return song;
		});
	};
}
