export default function getNotes({ baseUrl, token }) {
	return fetch(`${baseUrl}/songs/`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
		.then(response => response.json())
		.then(data => data.records.map(recordToSong));
}
