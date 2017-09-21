import recordToSong from './utils/recordToSong';

export default function getNotes({ databaseId, token }) {
	return fetch(`https://api.airtable.com/v0/${databaseId}/songs/`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
		.then(response => response.json())
		.then(data => data.records.map(recordToSong));
}
