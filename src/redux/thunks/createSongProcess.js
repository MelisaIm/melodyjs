import createSong from '../../requests/createSong';

export default function createSongProcess(song, history) {
	return (dispatch, getState, env) => {
		const { loggedUser, token } = getState();
		return createSong(song, {
			baseUrl: env.BASE_URL,
			token,
			authorId: loggedUser.id
		}).then(song => {
			dispatch({ type: 'CREATE_SONG', song });
			history.push(`studio/${song.id}`);
			return song;
		});
	};
}
