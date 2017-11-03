export default async function getUser(id, { baseUrl, token }) {
	const headers = token ? `Authorization: Bearer ${token}` : {};
	return fetch(`${baseUrl}/users/${id}`, { headers: { headers } })
		.then(response => response.json())
		.catch(error => console.error(error));
}
