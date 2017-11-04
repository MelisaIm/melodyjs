import createSong from '../../requests/createSong';
import getSongs from '../../requests/getSongs';

export default function createSongProcess(song, history) {
	return (dispatch, getState, env) => {
		const { loggedUser, token } = getState();
		return createSong(song, {
			baseUrl: env.BASE_URL,
			token,
			authorId: loggedUser.id
		}).then(async song => {
			const songs = await getSongs({
				baseUrl: env.BASE_URL,
				token
			});
			dispatch({ type: 'CREATE_SONG', song });
			dispatch({ type: 'GET_SONGS', songs });
			history.push(`studio/${song.id}`);
			return song;
		});
	};
}
