export default function deleteSong(id, { baseUrl, databaseId, token }) {
	return fetch(`${baseUrl}/songs/${id}`, {
		method: 'DELETE',
		headers: {
			// Authorization: `Bearer ${token}`
		}
	})
		.then(response => response.json())
		.then(result => result.deleted);
}
