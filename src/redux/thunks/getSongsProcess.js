import getSongs from '../../requests/getSongs';

export default function getSongsProcess() {
	return (dispatch, getState, env) => {
		return getSongs({
			databaseId: env.AIRTABLE_DATABASE_ID,
			token: env.AIRTABLE_TOKEN
		}).then(songs => {
			dispatch({ type: 'GET_SONGS', songs });
			return songs;
		});
	};
}
