import React, { PureComponent } from 'react';
import SignupComponent from './SignupComponent';
import NavBar from '../NavBar/NavBarComponent';
import Footer from '../NavBar/FooterComponent';

export default class LoginPage extends PureComponent {
	render() {
		return (
			<div className="LoginPage">
				<NavBar />
				<div className="logincontainer">
					<SignupComponent />}
				</div>
				<Footer />
			</div>
		);
	}
}
