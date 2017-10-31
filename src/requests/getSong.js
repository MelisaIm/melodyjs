export default function getNotes(id, { databaseId, token }) {
	return fetch(`${process.env.BASE_URL}/songs/${id}`, {
		headers: {
			// Authorization: `Bearer ${token}`
		}
	})
		.then(response => response.json())
		.catch(error => console.log(error));
}
