export default function getNotes({ baseUrl, token }) {
	return fetch(`${baseUrl}/songs/`, {
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		}
	})
		.then(response => response.json())
		.catch(error => console.log(error));
}
