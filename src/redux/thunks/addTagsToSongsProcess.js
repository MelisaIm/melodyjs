import addTag from '../../requests/addTag';

export default function addTagsToSongsProcess(tag, song) {
	return (dispatch, getState, env) => {
		const { loggedUser, token } = getState();
		return addTag(tag, song, {
			baseUrl: env.BASE_URL,
			token,
			authorId: loggedUser.id
		}).then(async tag => {
			dispatch({ type: 'ADD_TAG', tag });
			return tag;
		});
	};
}
