import getSong from '../../requests/getSong';

export default function getSongsProcess() {
	return (dispatch, getState) => {
		return getSong({
			databaseId: 'appxhHjmck1PuVaSU',
			token: 'keymBy1TajObCCmUW'
		}).then(song => {
			dispatch({ type: 'GET_SONG', song });
			return song;
		});
	};
}
