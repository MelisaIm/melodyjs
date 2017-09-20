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
		return (
			<Navbar fixedTop className="Nav" id="myNavbar">
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
				</Nav>
			</Navbar>
		);
	}
}
