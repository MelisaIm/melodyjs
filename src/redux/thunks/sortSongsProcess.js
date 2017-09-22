// import recordToSong from '../../requests/utils/recordToSong';
// export default function sortSongsProcess(sort) {
// 	return (dispatch, getState, env) => {
// 		return fetch(`https://api.airtable.com/v0/${env.AIRTABLE_DATABASE_ID}/songs/${sort}`, {
// 			headers: {
// 				Authorization: `Bearer ${env.AIRTABLE_TOKEN}`
// 			}
// 		})
// 			.then(response => response.json())
// 			.then(data => data.records.map(recordToSong))
// 			.then(songs => {
// 				dispatch({ type: 'GET_SONGS', songs });
// 				return songs;
// 			});
// 	};
// }

// must fix sort by created time, airtable sort method not accurate
