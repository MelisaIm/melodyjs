export default function createSong(song, { baseUrl, token, authorId }) {
	return fetch(`${baseUrl}/songs`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			authorId,
			title: song.title,
			description: song.description,
			melody: JSON.stringify(song.melody)
		})
	}).then(response => response.json());
}
