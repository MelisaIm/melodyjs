export default function getNotes(id, { baseUrl, token }) {
	return fetch(`${baseUrl}/songs/${id}`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
		.then(response => response.json())
		.then(record => recordToSong(record))
		.catch(error => console.log(error));
}
