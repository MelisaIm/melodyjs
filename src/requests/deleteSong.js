export default function deleteSong(id, { databaseId, token }) {
	return fetch(`${process.env.BASE_URL}/songs/${id}`, {
		method: 'DELETE',
		headers: {
			// Authorization: `Bearer ${token}`
		}
	})
		.then(response => response.json())
		.then(result => result.deleted);
}
