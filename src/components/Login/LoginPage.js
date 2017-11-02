import React, { PureComponent } from 'react';
import LoginComponent from './LoginComponent';
import SignupComponent from './SignupComponent';

export default class LoginPage extends PureComponent {
	render() {
		return (
			<div className="LoginPage">
				<LoginComponent onSubmit />
			</div>
		);
	}
}
