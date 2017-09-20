import React from 'react';
import LibraryPageLayout from './LibraryPageLayout';

export default function LibraryPage({ songs }) {
	return (
		<div className="LibraryPage">
			<LibraryPageLayout songs={songs} />
		</div>
	);
}
