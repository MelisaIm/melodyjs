import getSong from '../../requests/getSong';

export default function getSongProcess(id) {
	return (dispatch, getState, env) => {
		return getSong(id, {
			databaseId: env.AIRTABLE_DATABASE_ID,
			token: env.AIRTABLE_TOKEN
		}).then(song => {
			dispatch({ type: 'GET_SONG', song });
			return song;
		});
	};
}
