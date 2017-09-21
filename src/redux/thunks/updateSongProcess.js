import updateSong from '../../requests/updateSong';

export default function updateSongProcess(id, song) {
	return (dispatch, getState) => {
		return updateSong(id, song, {
			databaseId: 'appxhHjmck1PuVaSU',
			token: 'keymBy1TajObCCmUW'
		}).then(song => {
			dispatch({ type: 'UPDATE_SONG', song });
			return song;
		});
	};
}
