import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

export default function FooterComponent() {
	return (
		<div>
			<Breadcrumb className="FooterComponent">
				<Breadcrumb.Item href="#">MelodyJS</Breadcrumb.Item>
				<Breadcrumb.Item href="#">The Library</Breadcrumb.Item>
				<Breadcrumb.Item active>Sound Studio</Breadcrumb.Item>
			</Breadcrumb>
		</div>
	);
}
