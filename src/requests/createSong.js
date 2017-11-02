export default function createSong(song, { baseUrl, token }) {
	return fetch(`${baseUrl}/songs`, {
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
