import recordToSong from './utils/recordToSong';

export default function getNotes(id, { databaseId, token }) {
	return fetch(`${process.env.BASE_URL}/songs/${id}`, {
		headers: {
			// Authorization: `Bearer ${token}`
		}
	})
		.then(response => response.json())
		.then(record => recordToSong(record))
		.catch(error => console.log(error));
}
