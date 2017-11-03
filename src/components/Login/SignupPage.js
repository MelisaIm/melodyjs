import React from 'react';
import SignupComponent from './SignupComponent';
import NavBar from '../NavBar/NavBarComponent';
import Footer from '../NavBar/FooterComponent';

export default function SignupPage({ onSubmit, history }) {
	return (
		<div className="LoginPage">
			<NavBar />
			<div className="logincontainer">
				<SignupComponent onSubmit={onSubmit} history={history} />}
			</div>
			<Footer />
		</div>
	);
}
