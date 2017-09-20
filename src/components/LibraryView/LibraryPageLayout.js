import React from 'react';
import LibraryCardComponent from './LibraryCardComponent';
import NavBar from '../NavBar/NavBarComponent';
import Footer from '../NavBar/FooterComponent';

export default function LibraryPageLayout({ songs = [] }) {
	return (
		<div className="LibraryPageLayout">
			<NavBar />
			<div className="LibraryPageContent">
				{songs.map((song, index) => <LibraryCardComponent song={song} key={index} />)}
			</div>
			<Footer activeKey={2} />
		</div>
	);
}
