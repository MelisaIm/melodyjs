import getSong from '../../requests/getSong';

export default function getSongProcess(id) {
	return (dispatch, getState) => {
		return getSong(id, {
			databaseId: 'appxhHjmck1PuVaSU',
			token: 'keymBy1TajObCCmUW'
		}).then(song => {
			dispatch({ type: 'GET_SONG', song });
			return song;
		});
	};
}
