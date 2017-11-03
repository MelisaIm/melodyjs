export default function deleteSong(id, { baseUrl, token, authorId }) {
	return fetch(`${baseUrl}/songs/${id}`, {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		}
	})
		.then(response => response.json())
		.then(result => result.deleted);
}
