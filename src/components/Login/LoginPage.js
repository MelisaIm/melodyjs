import React from 'react';
import LoginComponent from './LoginComponent';
import NavBar from '../NavBar/NavBarComponent';
import Footer from '../NavBar/FooterComponent';

export default function LoginPage({ onSubmit, history }) {
	return (
		<div className="LoginPage">
			<NavBar />
			<div className="logincontainer">
				<LoginComponent onSubmit={onSubmit} history={history} />
			</div>
			<Footer />
		</div>
	);
}
