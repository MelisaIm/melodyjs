export default function updateSong(id, update, { baseUrl, token }) {
	return fetch(`${baseUrl}/songs/${id}`, {
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
