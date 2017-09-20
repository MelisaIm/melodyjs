import React from 'react';
import LibraryCardComponent from './LibraryCardComponent';
import NavBar from '../NavBar/NavBarComponent';
import Footer from '../NavBar/FooterComponent';

export default function LibraryPageLayout({ songs = [] }) {
	if (Array.isArray(songs) && songs.length > 0) {
		return (
			<div className="LibraryPageLayout">
				<NavBar />
				<div className="LibraryPageContent">
					{songs.map((song, index) => <LibraryCardComponent song={song} key={index} />)}
				</div>
				<Footer activeKey={2} />
			</div>
		);
	} else {
		return <div> No Songs</div>;
	}
}
