import React from 'react';
import LibraryPageLayout from './LibraryPageLayout';

export default function LibraryPage({ songs, song }) {
	return (
		<div className="LibraryPage">
			<LibraryPageLayout songs={songs} song={song} />
		</div>
	);
}
