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
					<div className="LibraryCardComponent">
						<div className="card" style={{ width: 20 + 'rem' }}>
							<div className="placeholder">
								<img src="https://placekitten.com/160/160" alt="" />
							</div>
							<div className="card-block">
								<h4 className="card-title" />
								<p className="card-text" />
								<a href="/studio" className="btn btn-primary">
									Create Song
								</a>
							</div>
						</div>
					</div>
				</div>
				<Footer activeKey={2} />
			</div>
		);
	} else {
		return <div> No Songs</div>;
	}
}
