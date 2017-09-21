export default function deleteSong(id, { databaseId, token }) {
	return fetch(`https://api.airtable.com/v0/${databaseId}/notes/${id}`, {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
		.then(response => response.json())
		.then(result => result.deleted);
}
