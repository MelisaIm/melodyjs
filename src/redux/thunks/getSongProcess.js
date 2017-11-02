import getSong from '../../requests/getSong';

export default function getSongProcess(id) {
	return (dispatch, getState, env) => {
		return getSong(id, {
			baseUrl: env.BASE_URL,
			token: env.AIRTABLE_TOKEN
		}).then(song => {
			dispatch({ type: 'GET_SONG', song });
			return song;
		});
	};
}
