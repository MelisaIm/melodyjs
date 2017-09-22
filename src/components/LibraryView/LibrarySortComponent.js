import React from 'react';

export default function LibrarySortComponent({ sortAlphabetically, sortByDate, data }) {
	function _handleOnClick(event) {
		if (event.target.innerText === 'A-Z') {
			sortAlphabetically(data);
		}
		if (event.target.innerText === 'By Date') {
			sortByDate(data);
		}
	}
	return (
		<div className="LibrarySortComponent">
			<span className="LibrarySortComponentSpan">Sort Library</span>
			<button className="btn" onClick={_handleOnClick}>
				A-Z
			</button>
			<button className="btn" onClick={_handleOnClick}>
				By Date
			</button>
		</div>
	);
}
