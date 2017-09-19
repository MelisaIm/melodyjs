import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

export default function NavBarComponent() {
	function handleSelect(selectedKey) {
		alert('selected ' + selectedKey);
	}
	return (
		<div className="Nav">
			<Nav bsStyle="tabs" activeKey={3} onSelect={handleSelect}>
				<NavItem eventKey={1} href="/home">
					MelodyJs
				</NavItem>
				<NavItem eventKey={2} title="Library">
					The Library
				</NavItem>
				<NavItem eventKey={3} title="Studio">
					Sound Studio
				</NavItem>
			</Nav>
		</div>
	);
}
