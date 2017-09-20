import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

export default function LibraryCardComponent({ song = {} }) {
	if (song.rows && Array.isArray(song.rows)) {
		return (
			<div className="LibraryCardComponent">
				<div className="card" style={{ width: 20 + 'rem' }}>
					<div className="minigrid">
						{song.rows.map((row, index) => {
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
							{song.title ? song.title : 'Song Title'}
						</h4>
						<p className="card-text">
							{song.description ? song.description : 'Song Description'}
						</p>
						<LinkContainer to={`/studio/${song.id}`} exact>
							<a href="#" className="btn btn-primary">
								Open
							</a>
						</LinkContainer>
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
							{song.title ? song.title : 'Song Title'}
						</h4>
						<p className="card-text">
							{song.description ? song.description : 'Song Description'}
						</p>
						<LinkContainer to={`/studio/${song.id}`} exact>
							<a href="#" className="btn btn-primary">
								Open
							</a>
						</LinkContainer>
					</div>
				</div>
			</div>
		);
	}
}
