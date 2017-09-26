import deleteSong from '../../requests/deleteSong';

export default function deleteSongProcess(id, history) {
	return (dispatch, getState, env) => {
		return deleteSong(id, {
			databaseId: env.AIRTABLE_DATABASE_ID,
			token: env.AIRTABLE_TOKEN
		}).then(result => {
			dispatch({ type: 'DELETE_SONG', id });
			history.push(`/library`);
			return result;
		});
	};
}
