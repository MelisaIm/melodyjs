import getUser from '../../requests/users/getUser';
import createUser from '../../requests/users/createUser';

export default function signupProcess({ userName, password, email }, history) {
	return async (dispatch, getState, env) => {
		console.log(userName, password, email);
		try {
			const user = await createUser({ userName, password, email, baseUrl: env.BASE_URL });
			if (user.status === 201) {
				history.push('/login');
			} else {
				dispatch({ type: 'LOGIN_SIGNUP_ERROR' });
			}
		} catch (error) {
			console.error(error);
			localStorage.removeItem('token');
		}
	};
}
