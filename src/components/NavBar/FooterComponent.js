import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

export default function FooterComponent({ activeKey }) {
	return (
		<div className="footer">
			<Breadcrumb className="FooterComponent">
				<Breadcrumb.Item active={activeKey === 1} href="/">
					MelodyJS
				</Breadcrumb.Item>
				<Breadcrumb.Item active={activeKey === 2} href="/library">
					The Library
				</Breadcrumb.Item>
				<Breadcrumb.Item active={activeKey === 3} href="/studio">
					Sound Studio
				</Breadcrumb.Item>
				<span className="footer-text">
					Built with{' '}
					<a href="https://facebook.github.io/react/" target="_blank" rel="noopener noreferrer">
						React
					</a>{' '}
					and{' '}
					<a href="https://tonejs.github.io/" target="_blank" rel="noopener noreferrer">
						ToneJS
					</a>{' '}
					by{' '}
					<a href="https://github.com/MelisaIm" target="_blank" rel="noopener noreferrer">
						Melisa Im
					</a>
				</span>
			</Breadcrumb>
		</div>
	);
}
