import recordToSong from './utils/recordToSong';

export default function createSong(song, { databaseId, token }) {
	return fetch(`https://api.airtable.com/v0/${databaseId}/notes`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			fields: song
		})
	})
		.then(response => response.json())
		.then(recordToSong);
}
