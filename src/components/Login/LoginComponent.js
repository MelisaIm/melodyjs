import React, { PureComponent } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
// import CSSModules from 'react-css-modules';
import styles from './login.css';

export default class LoginComponent extends PureComponent {
	render() {
		return (
			<div className={styles.LoginComponent}>
				<form className={styles.login}>
					<FormGroup className="form" controlId="formControlsTextarea">
						<ControlLabel>Email</ControlLabel>
						<FormControl
							className="Form-email"
							name="emailInput"
							type="text"
							value={this.props.email || ''}
							placeholder="email"
							onChange={this._handleChangeInput}
							required
						/>
						<ControlLabel>Password</ControlLabel>
						<FormControl
							componentClass="textarea"
							className="Form-password"
							type="password"
							name="passwordInput"
							placeholder="password"
							value={this.props.password || ''}
							onChange={this._handleChangeInput}
							required
						/>
					</FormGroup>
				</form>
			</div>
		);
	}
}
