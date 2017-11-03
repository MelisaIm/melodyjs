import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default function TagDisplayComponent({ tags, song }) {
	return (
		<div className="tagsContainer">
			{tags.map((tag, index) => <div key={`${index}${tag}`} />)}
		</div>
	);
}
