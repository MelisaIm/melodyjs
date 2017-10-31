import recordToSong from './utils/recordToSong';

export default function createSong(song, { databaseId, token }) {
	return fetch(`${process.env.BASE_URL}/songs`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			fields: {
				authorId: song.info.authorId,
				title: song.info.title,
				description: song.info.description,
				melody: song.melody
			}
		})
	})
		.then(response => response.json())
		.then(recordToSong);
}
