import React from 'react';

export default function logoutProcess(history) {
	return async (dispatch, getState, env) => {
		try {
			localStorage.removeItem('token');
			dispatch({ type: 'LOGOUT_USER' });
			history.push('/logout');
			return null;
		} catch (error) {
			console.error(error);
			localStorage.removeItem('token');
		}
	};
}
