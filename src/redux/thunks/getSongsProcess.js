import getSongs from '../../requests/getSongs';

export default function getSongsProcess(token) {
	return (dispatch, getState, env) => {
		return getSongs({
			baseUrl: env.BASE_URL,
			token: localStorage.getItem('token')
		}).then(songs => {
			dispatch({ type: 'GET_SONGS', songs });
			return songs;
		});
	};
}
