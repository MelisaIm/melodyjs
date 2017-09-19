import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

export default function NavBarComponent({ activeKey }) {
	function handleSelect(selectedKey) {
		alert('selected ' + selectedKey);
	}
	return (
		<div className="Nav">
			<Nav bsStyle="tabs" activeKey={activeKey} onSelect={handleSelect}>
				<NavItem eventKey={1} href="/home">
					MelodyJS
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
