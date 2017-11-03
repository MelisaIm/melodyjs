import React, { PureComponent } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
// import CSSModules from 'react-css-modules';
import styles from './login.css';

export default class LoginComponent extends PureComponent {
	constructor(props) {
		super(props);
		this._history = this.props.history;
	}
	render() {
		return (
			<form className="login" onSubmit={this._handleSubmit}>
				<FormGroup className="loginForm" controlId="formControlsTextarea">
					{this.props.loggedUser
						? <div className="center bold">Logout</div>
						: <div className="center bold">Login</div>}
					<ControlLabel>Username</ControlLabel>
					<FormControl
						className="Form-username"
						name="userName"
						type="text"
						placeholder="username"
						required
					/>
					<ControlLabel>Password</ControlLabel>
					<FormControl
						className="Form-password"
						type="password"
						name="password"
						placeholder="password"
						required
					/>
					{this.props.loggedUser
						? <div className="center">
								<Button className="submitBtn" type="submit">
									Logout
								</Button>
							</div>
						: <div className="center">
								<Button className="submitBtn" type="submit">
									Submit
								</Button>
							</div>}
				</FormGroup>
			</form>
		);
	}

	_handleSubmit = event => {
		event.preventDefault();
		const { userName, password } = event.target;
		this.props.onSubmit({
			userName: userName.value.trim(),
			password: password.value.trim(),
			history: this._history
		});
	};
}
