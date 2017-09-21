import recordToSong from './utils/recordToSong';

export default function updateSong(id, update, { databaseId, token }) {
	return fetch(`https://api.airtable.com/v0/${databaseId}/songs/${id}`, {
		method: 'PATCH',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			fields: {
				title: update.info.title,
				description: update.info.description,
				melody: update.melody
			}
		})
	})
		.then(response => response.json())
		.then(record => recordToSong(record));
}
