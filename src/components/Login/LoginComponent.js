import React, { PureComponent } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
// import CSSModules from 'react-css-modules';
import styles from './login.css';

export default class LoginComponent extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}
	render() {
		return (
			<form className="login">
				<FormGroup className="loginForm" controlId="formControlsTextarea">
					<div className="center bold">Login</div>
					<ControlLabel>Username</ControlLabel>
					<FormControl
						className="Form-username"
						name="userName"
						type="username"
						placeholder="username"
						onChange={this._handleSubmit}
						required
					/>
					<ControlLabel>Password</ControlLabel>
					<FormControl
						className="Form-password"
						type="password"
						name="password"
						placeholder="password"
						onChange={this._handleSubmit}
						required
					/>
					<div className="center">
						<Button className="submitBtn" type="submit">
							Submit
						</Button>
					</div>
				</FormGroup>
			</form>
		);
	}
	_handleSubmit = event => {
		event.preventDefault();
		const { userName, password } = event.target;

		this.props.onSubmit({
			userName: userName.trim(),
			password: password.trim()
		});
	};
}
