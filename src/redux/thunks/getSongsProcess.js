import getSongs from '../../requests/getSongs';

export default function getSongsProcess(token) {
	return (dispatch, getState, env) => {
		const { token } = getState();
		return getSongs({
			baseUrl: env.BASE_URL,
			token: token
		}).then(songs => {
			dispatch({ type: 'GET_SONGS', songs });
			return songs;
		});
	};
}
