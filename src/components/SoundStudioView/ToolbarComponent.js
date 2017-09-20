import React from 'react';
import Tone from 'tone';

export default function ToolbarComponent({ song, onReplay, onClear, onSave, onDelete }) {
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
				let chordArray = song.map(array => array[chord]).filter(note => note !== 0);
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

	// fetch current song
	function _handleClear() {}

	// send changes to api
	function _handleSave() {}

	// delete song from api
	function _handleDelete() {}

	return (
		<div className="ToolbarComponent">
			<h1>Options</h1>
			<button className="action-button" onClick={_handleReplay}>
				{' '}REPLAY SONG{' '}
			</button>
			<button className="action-button" onClick={_handleClear}>
				{' '}CLEAR CHANGES{' '}
			</button>
			<button className="action-button" onClick={_handleSave}>
				{' '}SAVE PROGRESS{' '}
			</button>
			<button className="action-button" onClick={_handleDelete}>
				{' '}DELETE SONG{' '}
			</button>
		</div>
	);
}
