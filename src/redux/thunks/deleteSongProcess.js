import deleteSong from '../../requests/deleteSong';

export default function deleteSongProcess(id, history) {
	return (dispatch, getState, env) => {
		const { loggedUser, token } = getState();
		return deleteSong(id, {
			baseUrl: env.BASE_URL,
			token: token,
			authorId: loggedUser.id
		}).then(result => {
			dispatch({ type: 'DELETE_SONG', id });
			history.push(`/library`);
			return result;
		});
	};
}
