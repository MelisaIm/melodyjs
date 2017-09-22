import React from 'react';
import { FormControl, Form, ControlLabel, FormGroup, Button } from 'react-bootstrap';

export default function LibrarySortComponent({
	sortAlphabetically,
	sortByDate,
	data,
	filterSongs
}) {
	function _handleOnClick(event) {
		if (event.target.innerText === 'A-Z') {
			sortAlphabetically(data, 'A-Z');
		}
		if (event.target.innerText === 'Z-A') {
			sortAlphabetically(data, 'Z-A');
		}
	}

	function _handleOnSubmit(event) {
		event.preventDefault();
		const searchQuery = event.target.search.value;
		filterSongs(data, searchQuery);
	}
	return (
		<div className="LibrarySortComponent">
			<span className="LibrarySortComponentSpan">Navigate Library</span>

			<div className="searchForm">
				<Form inline onSubmit={_handleOnSubmit}>
					<FormGroup controlId="formInlineSearch">
						<ControlLabel>Search</ControlLabel>{' '}
						<FormControl name="search" type="text" placeholder="Search for a song title" />
					</FormGroup>{' '}
					<Button type="submit">Submit</Button>
				</Form>
			</div>
			<span>
				<ControlLabel className="searchSortLabel">Sort</ControlLabel>{' '}
				<button className="btn" onClick={_handleOnClick}>
					A-Z
				</button>
				<button className="btn" onClick={_handleOnClick}>
					Z-A
				</button>
			</span>
		</div>
	);
}
