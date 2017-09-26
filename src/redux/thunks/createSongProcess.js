import createSong from '../../requests/createSong';

export default function createSongProcess(song, history) {
	return (dispatch, getState, env) => {
		return createSong(song, {
			databaseId: env.AIRTABLE_DATABASE_ID,
			token: env.AIRTABLE_TOKEN
		}).then(song => {
			dispatch({ type: 'CREATE_SONG', song });
			history.push(`studio/${song.id}`);
			return song;
		});
	};
}
