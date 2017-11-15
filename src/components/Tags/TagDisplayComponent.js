import React from 'react';

export default function TagDisplayComponent({ tags, song }) {
	const colors = ['red', 'black', 'blue', 'green', 'pink', 'purple', 'violet', 'indigo'];
	return tags
		? <div className="tagsContainer">
				{tags.map((tag, index) => {
					let color = colors[Math.floor(Math.random() * 7)];

					return (
						<div className={`tag ${color}`} key={`${index}${tag}`}>
							{tag}
						</div>
					);
				})}
			</div>
		: null;
}
