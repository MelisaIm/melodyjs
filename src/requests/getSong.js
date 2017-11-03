export default function getNotes(id, { baseUrl, token }) {
	return fetch(`${baseUrl}/songs/${id}`, {
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		}
	})
		.then(response => response.json())
		.catch(error => console.log(error));
}
