export default function createSong(song, { baseUrl, databaseId, token }) {
	return fetch(`${baseUrl}/songs`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			fields: {
				authorId: song.authorId,
				title: song.title,
				description: song.description,
				melody: song.melody
			}
		})
	}).then(response => response.json());
}
