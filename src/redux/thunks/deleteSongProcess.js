import deleteSong from '../../requests/deleteSong';

export default function deleteSongProcess(id, history) {
	return (dispatch, getState, env) => {
		const { token } = getState();
		return deleteSong(id, {
			baseUrl: env.BASE_URL,
			token: token
		}).then(result => {
			dispatch({ type: 'DELETE_SONG', id });
			history.push(`/library`);
			return result;
		});
	};
}
