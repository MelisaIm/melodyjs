export default function getUser(id, { baseUrl, token }) {
	return fetch(`${baseUrl}/users/${id}`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
		.then(response => response.json())
		.catch(error => console.log(error));
}
