import React from 'react';

export default function LoggedOutPage(location) {
	console.log(location);
	return (
		<div className="LoggedOutPage">
			<p>You have successfully logged out</p>
		</div>
	);
}
