import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Tone from 'tone';

export default function LibraryCardComponent({ song = {} }) {
	function sleep(milliseconds) {
		let start = new Date().getTime();
		for (let i = 0; i < 1e7; i++) {
			if (new Date().getTime() - start > milliseconds) {
				break;
			}
		}
	}

	function _handleReplay() {
		if (song) {
			const chords = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
			const arrayOfChords = [];
			chords.forEach(chord => {
				let chordArray = song.melody.map(array => array[chord]).filter(note => note !== 0);
				if (chordArray.length > 0) {
					arrayOfChords.push(chordArray);
				}
			});
			arrayOfChords.forEach(chord => {
				if (chord.length === 1) {
					sleep(500);
					synth(chord[0]);
				} else {
					sleep(500);

					poly(chord.length, chord);
				}
			});
		} else {
			return false;
		}
	}
	function poly(voices, chordArray) {
		let polySynth = new Tone.PolySynth(voices, Tone.Synth).toMaster();
		polySynth.triggerAttackRelease(chordArray, '16n');
	}
	function synth(note) {
		let synth = new Tone.Synth().toMaster();
		synth.triggerAttackRelease(note, '16n');
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
								<a href="#" className="btn btn-primary">
									Edit
								</a>
							</LinkContainer>
							<a href="#" className="btn btn-primary" onClick={_handleReplay}>
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
								<a href="#" className="btn btn-primary">
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
