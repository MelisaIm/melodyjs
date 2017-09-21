import getSongs from '../../requests/getSongs';

export default function getSongsProcess() {
	return (dispatch, getState) => {
		return getSongs({
			databaseId: 'appxhHjmck1PuVaSU',
			token: 'keymBy1TajObCCmUW'
		}).then(songs => {
			dispatch({ type: 'GET_SONGS', songs });
			return songs;
		});
	};
}
