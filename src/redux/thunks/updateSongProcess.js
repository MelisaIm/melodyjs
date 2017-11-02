import updateSong from '../../requests/updateSong';

export default function updateSongProcess(id, song) {
	return (dispatch, getState, env) => {
		return updateSong(id, song, {
			baseUrl: env.BASE_URL,
			token: env.AIRTABLE_TOKEN
		}).then(song => {
			dispatch({ type: 'UPDATE_SONG', song });
			return song;
		});
	};
}
