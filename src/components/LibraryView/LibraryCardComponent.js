import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import handleReplay from 'helperFunctions/handleReplay';

export default function LibraryCardComponent({ song = {} }) {
	function _handleReplay() {
		handleReplay(song, () => {});
	}

	if (song && Array.isArray(song.melody)) {
		return (
			<div className="LibraryCardComponent">
				<div className="card" style={{ width: 20 + 'rem' }}>
					<div className="minigrid">
						{song.melody.map((row, index) => {
							return (
								<div className="minigrid-row" key={index}>
									{row.map((note, index) => {
										if (note === 0) {
											return (
												<div className="mini-square" key={(note, index)}>
													<span className="mini-span" />
												</div>
											);
										} else {
											return (
												<div className="mini-square filled" key={(note, index)}>
													<span className="mini-span" />
												</div>
											);
										}
									})}
								</div>
							);
						})}
					</div>
					<div className="card-block">
						<h4 className="card-title">
							{song.info.title ? song.info.title : 'Song Title'}
						</h4>
						<p className="card-text">
							{song.info.description ? song.info.description : 'Song Description'}
						</p>
						<div className="card-buttons">
							<LinkContainer to={`/studio/${song.id}`} exact>
								<a href={`/studio/${song.id}`} className="btn btn-primary">
									Edit
								</a>
							</LinkContainer>
							<a className="btn btn-primary" onClick={_handleReplay}>
								Preview
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="LibraryCardComponent">
				<div className="card" style={{ width: 20 + 'rem' }}>
					<div className="placeholder">
						<img src="https://placekitten.com/160/160" alt="" />
					</div>
					<div className="card-block">
						<h4 className="card-title">
							{song.info.title ? song.info.title : 'Song Title'}
						</h4>
						<p className="card-text">
							{song.info.description ? song.info.description : 'Song Description'}
						</p>
						<div className="card-buttons">
							<LinkContainer to={`/studio/${song.id}`} exact>
								<a href={`/studio/${song.id}`} className="btn btn-primary">
									Open
								</a>
							</LinkContainer>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
