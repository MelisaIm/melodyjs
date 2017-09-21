import recordToSong from './utils/recordToSong';
import melodyToString from './utils/melodyToString';

export default function createSong(song, { databaseId, token }) {
	return fetch(`https://api.airtable.com/v0/${databaseId}/songs`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			fields: {
				title: song.info.title,
				description: song.info.description,
				melody: melodyToString(song.melody)
			}
		})
	})
		.then(response => response.json())
		.then(recordToSong);
}
