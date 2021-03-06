import React from 'react';
import LibraryPageLayout from './LibraryPageLayout';

export default function LibraryPage({
	data,
	song,
	sortAlphabetically,
	sortByDate,
	filterSongs,
	sortedSongs,
	loggedUser
}) {
	return (
		<div className="LibraryPage">
			<LibraryPageLayout
				data={data}
				song={song}
				sortAlphabetically={sortAlphabetically}
				sortByDate={sortByDate}
				filterSongs={filterSongs}
				sortedSongs={sortedSongs}
				loggedUser={loggedUser}
			/>
		</div>
	);
}
