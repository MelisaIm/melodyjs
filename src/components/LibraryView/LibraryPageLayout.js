import React from 'react';
import LibraryCardComponent from './LibraryCardComponent';
import NavBar from '../NavBar/NavBarComponent';
import Footer from '../NavBar/FooterComponent';
import LibrarySortComponent from './LibrarySortComponent';

export default function LibraryPageLayout({
	data = [],
	sortAlphabetically,
	sortByDate,
	filterSongs,
	sortedSongs
}) {
	if (Array.isArray(data) && data.length > 0) {
		return (
			<div className="LibraryPageLayout">
				<NavBar />
				<div className="LibraryPageContent">
					<LibrarySortComponent
						data={data}
						sortAlphabetically={sortAlphabetically}
						sortByDate={sortByDate}
						filterSongs={filterSongs}
					/>
					{sortedSongs
						? sortedSongs.map((song, index) => <LibraryCardComponent song={song} key={index} />)
						: data.map((song, index) => <LibraryCardComponent song={song} key={index} />)}
					<div className="LibraryCardComponent">
						<div className="card" style={{ width: 20 + 'rem' }}>
							<div className="placeholder">
								<img src="https://placekitten.com/160/160" alt="" />
							</div>
							<div className="card-block">
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
		return <div>...Loading</div>;
	}
}
