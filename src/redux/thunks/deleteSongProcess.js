import deleteSong from '../../requests/deleteSong';

export default function deleteSongProcess(id) {
	return (dispatch, getState) => {
		return deleteSong(id, {
			databaseId: 'appxhHjmck1PuVaSU',
			token: 'keymBy1TajObCCmUW'
		}).then(result => {
			dispatch({ type: 'DELETE_SONG', id });
			return result;
		});
	};
}
