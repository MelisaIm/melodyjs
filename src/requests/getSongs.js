export default function getNotes({ databaseId, token }) {
	return fetch(`${process.env.BASE_URL}/songs/`, {
		headers: {
			// Authorization: `Bearer ${token}`
		}
	}).then(response => response.json());
}
