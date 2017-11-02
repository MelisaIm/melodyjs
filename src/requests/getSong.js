export default function getNotes(id, { baseUrl, databaseId, token }) {
	return fetch(`${baseUrl}/songs/${id}`, {
		headers: {
			// Authorization: `Bearer ${token}`
		}
	})
		.then(response => response.json())
		.catch(error => console.log(error));
}
