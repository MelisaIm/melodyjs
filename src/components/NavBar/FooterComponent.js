import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

export default function FooterComponent({ activeKey }) {
	return (
		<div>
			<Breadcrumb className="FooterComponent">
				<Breadcrumb.Item active={activeKey === 1} href="#">
					MelodyJS
				</Breadcrumb.Item>
				<Breadcrumb.Item active={activeKey === 2} href="#">
					The Library
				</Breadcrumb.Item>
				<Breadcrumb.Item active={activeKey === 3}>Sound Studio</Breadcrumb.Item>
			</Breadcrumb>
		</div>
	);
}
