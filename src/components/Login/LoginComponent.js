import React, { PureComponent } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export default class LoginComponent extends PureComponent {
	constructor(props) {
		super(props);
		this._history = this.props.history;
	}
	render() {
		return (
			<div>
				{this.props.loggedUser
					? <form className="login" onSubmit={this._handleLogOut}>
							<FormGroup className="loginForm" controlId="formControlsTextarea">
								<div className="center bold">
									Log out {this.props.loggedUser.userName}?
								</div>

								<div className="center">
									<Button className="submitBtn" type="submit">
										Confirm
									</Button>
								</div>
							</FormGroup>
						</form>
					: <form className="login" onSubmit={this._handleSubmit}>
							<FormGroup className="loginForm" controlId="formControlsTextarea">
								<div className="center bold">Login</div>
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
								<div className="center">
									<Button className="submitBtn" type="submit">
										Submit
									</Button>
								</div>
							</FormGroup>
						</form>}
			</div>
		);
	}

	_handleLogOut = event => {
		event.preventDefault();
		this.props.onSubmit({
			history: this._history
		});
	};

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
