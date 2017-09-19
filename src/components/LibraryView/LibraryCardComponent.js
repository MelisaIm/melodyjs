import React from 'react';

export default function LibraryCardComponent({ song }) {
	return (
		<div className="LibraryCardComponent">
			<div className="card" style={{ width: 20 + 'rem' }}>
				<div className="minigrid">
					{song.rows.map((row, index) => {
						console.log(song.rows[index]);
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
					<h4 className="card-title">Song #1</h4>
					<p className="card-text">Song description</p>
					<a href="#" className="btn btn-primary">
						Open
					</a>
				</div>
			</div>
		</div>
	);
}
