export default async function getUser(id, { baseUrl, token }) {
	try {
		const headers = token ? `Authorization: Bearer ${token}` : {};
		const response = await fetch(`${baseUrl}/users/${id}`, { headers });
		const user = await response.json();
		return user;
	} catch (error) {}

	return fetch(`${baseUrl}/users/${id}`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
		.then(response => response.json())
		.catch(error => console.log(error));
}
