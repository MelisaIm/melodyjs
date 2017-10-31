export default function updateSong(id, update, { databaseId, token }) {
	return fetch(`${process.env.BASE_URL}/songs/${id}`, {
		method: 'PATCH',
		headers: {
			// Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			fields: {
				title: update.info.title,
				description: update.info.description,
				melody: update.melody,
				updatedAt: new Date().toISOString()
			}
		})
	}).then(response => response.json());
}
