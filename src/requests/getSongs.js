export default function getNotes({ baseUrl, databaseId, token }) {
	return fetch(
		`${baseUrl}/songs/`
		// 	, {
		// 	headers: {
		// 		// Authorization: `Bearer ${token}`
		// 	}
		// }
	)
		.then(response => response.json())
		.catch(error => console.log(error));
}
