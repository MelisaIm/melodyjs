export default function deleteSong(id, { baseUrl, token }) {
	return fetch(`${baseUrl}/songs/${id}`, {
		method: 'DELETE',
		headers: {
			// Authorization: `Bearer ${token}`
		}
	})
		.then(response => response.json())
		.then(result => result.deleted);
}
