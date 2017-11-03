export default async function createUser({ email, userName, password, baseUrl }) {
	return fetch(`${baseUrl}/users`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			email,
			userName,
			password
		})
	})
		.then(response => response.json())
		.catch(error => console.error(error));
}
