import React from 'react';
import LoginComponent from './LoginComponent';
import NavBar from '../NavBar/NavBarComponent';
import Footer from '../NavBar/FooterComponent';

export default function LoginPage({ onSubmit, history, onLogOut, loggedUser }) {
	return (
		<div className="LoginPage">
			<NavBar loggedUser={loggedUser} />
			<div className="logincontainer">
				<LoginComponent
					onSubmit={loggedUser ? onLogOut : onSubmit}
					history={history}
					loggedUser={loggedUser}
				/>
			</div>
			<Footer />
		</div>
	);
}
