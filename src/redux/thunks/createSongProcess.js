import createSong from '../../requests/createSong';

export default function createSongProcess(song, history) {
	return (dispatch, getState, env) => {
		return createSong(song, {
			baseUrl: env.BASE_URL,
			token: env.AIRTABLE_TOKEN
		}).then(song => {
			dispatch({ type: 'CREATE_SONG', song });
			history.push(`studio/${song.id}`);
			return song;
		});
	};
}
