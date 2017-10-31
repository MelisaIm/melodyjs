export default function updateSong(id, update, { baseUrl, databaseId, token }) {
	return fetch(`${baseUrl}/songs/${id}`, {
		method: 'PATCH',
		headers: {
			// Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			fields: {
				title: update.title,
				description: update.description,
				melody: update.melody,
				updatedAt: new Date().toISOString()
			}
		})
	}).then(response => response.json());
}
