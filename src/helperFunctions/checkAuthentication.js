import getUser from '../requests/users/getUser';
import jwtDecode from 'jwt-decode';

export default async function checkAuthentication({ baseUrl }) {
	try {
		const token = localStorage.getItem('token');

		if (!token) {
			localStorage.removeItem('token');
			return null;
		}

		const { sub: userId, exp: expiration } = jwtDecode(token);

		if (expiration * 1000 > Date.now()) {
			localStorage.removeItem('token');
			return null;
		}

		const user = await getUser(userId, { baseUrl, token });

		return Object.assign({}, token, user);
	} catch (error) {
		console.log('HERE');

		localStorage.removeItem('token');
		return null;
	}
}
