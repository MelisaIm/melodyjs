import React, { PureComponent } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class NavBarComponent extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			key: null
		};
	}

	render() {
		return this.props.loggedUser
			? <Navbar fixedTop className="Nav" id="myNavbar">
					<Nav>
						<LinkContainer to="/" exact>
							<NavItem eventKey={1} className="nav-item nav-link" href="/">
								MelodyJS
							</NavItem>
						</LinkContainer>
						<LinkContainer to="/library" exact>
							<NavItem eventKey={2} className="nav-item nav-link" href="/library" title="library">
								The Library
							</NavItem>
						</LinkContainer>
						<LinkContainer to="/studio" exact>
							<NavItem eventKey={3} className="nav-item nav-link" href="/studio" title="studio">
								Sound Studio
							</NavItem>
						</LinkContainer>
						<LinkContainer to="/login" exact>
							<NavItem eventKey={4} className="nav-item nav-link" href="/" title="logout">
								Logout
							</NavItem>
						</LinkContainer>
					</Nav>
				</Navbar>
			: <Navbar fixedTop className="Nav" id="myNavbar">
					<Nav>
						<LinkContainer to="/" exact>
							<NavItem eventKey={1} className="nav-item nav-link" href="/">
								MelodyJS
							</NavItem>
						</LinkContainer>
						<LinkContainer to="/library" exact>
							<NavItem eventKey={2} className="nav-item nav-link" href="/library" title="library">
								The Library
							</NavItem>
						</LinkContainer>
						<LinkContainer to="/studio" exact>
							<NavItem eventKey={3} className="nav-item nav-link" href="/studio" title="studio">
								Sound Studio
							</NavItem>
						</LinkContainer>
						<LinkContainer to="/login" exact>
							<NavItem eventKey={4} className="nav-item nav-link" href="/login" title="login">
								Login
							</NavItem>
						</LinkContainer>
						<LinkContainer to="/register" exact>
							<NavItem eventKey={5} className="nav-item nav-link" href="/register" title="register">
								Signup
							</NavItem>
						</LinkContainer>
					</Nav>
				</Navbar>;
	}
}
