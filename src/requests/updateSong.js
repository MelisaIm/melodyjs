export default function updateSong(id, update, { baseUrl, token }) {
	return fetch(`${baseUrl}/songs/${id}`, {
		method: 'PATCH',
		headers: {
			// Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			title: update.title,
			description: update.description,
			melody: JSON.stringify(update.melody),
			updatedAt: new Date().toISOString()
		})
	}).then(response => response.json());
}
