export default function login({ userName, password }, { baseUrl, token }) {
	return fetch(`${baseUrl}/token/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ userName, password })
	})
		.then(response => response.json())
		.catch(error => console.log(error));
}
