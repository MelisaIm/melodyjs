import React, { PureComponent } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export default class SignupComponent extends PureComponent {
	constructor(props) {
		super(props);
		this.state = { noMatch: false, tooShort: false };
	}
	render() {
		return (
			<form className="signup" onSubmit={this._handleSubmit}>
				<FormGroup className="signupForm" controlId="formControlsTextarea">
					<div className="center bold">SignUp</div>
					<ControlLabel>Username</ControlLabel>
					<FormControl
						className="Form-username"
						name="userName"
						type="username"
						placeholder="new username"
						required
					/>
					<ControlLabel>Email</ControlLabel>
					<FormControl
						className="Form-email"
						name="email"
						type="email"
						onChange={this._onChange}
						placeholder="email"
						required
					/>
					<ControlLabel>Password</ControlLabel>
					<FormControl
						className="Form-password"
						type="password"
						name="password"
						onChange={this._onChange}
						placeholder="new password"
						required
					/>
					<ControlLabel>Password</ControlLabel>
					<FormControl
						className="Form-password"
						type="password"
						name="passwordTwo"
						onChange={this._onChange}
						placeholder="re-enter your password"
						required
					/>
					<div className="center">
						<Button className="submitBtn" type="submit">
							Submit
						</Button>
					</div>
					{this.state.noMatch ? <div>Passwords don't match</div> : null}
					{this.state.tooShort ? <div>Passwords must be at least 5 characters</div> : null}
				</FormGroup>
			</form>
		);
	}

	_onChange = event => {
		event.preventDefault();
		this.setState({
			tooShort: false,
			noMatch: false
		});
	};

	_handleSubmit = event => {
		event.preventDefault();
		const { userName, password, passwordTwo, email } = event.target;

		if (password.value.length < 5) {
			this.setState({
				tooShort: true
			});
			return;
		}

		if (password.value.trim() !== passwordTwo.value.trim()) {
			this.setState({
				noMatch: true
			});
			return;
		}

		this.props.onSubmit({
			history: this.props.history,
			userName: userName.value.trim(),
			password: password.value.trim(),
			email: email.value.trim()
		});
	};
}
