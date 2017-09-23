import React from 'react';
import Tone from 'tone';

export default function ToolbarComponent({
	songId,
	song,
	onReplay,
	onClear,
	onSave,
	onDelete,
	info,
	passChord,
	playingChord
}) {
	function sleep(milliseconds) {
		let start = new Date().getTime();
		for (let i = 0; i < 1e7; i++) {
			if (new Date().getTime() - start > milliseconds) {
				break;
			}
		}
	}

	function _handleReplay() {
		if (song.melody) {
			const chords = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
			const arrayOfChords = [];
			chords.forEach(chord => {
				let chordArray = song.melody.map(array => array[chord]).filter(note => note !== 0);
				arrayOfChords.push(chordArray);
			});
			arrayOfChords.forEach((chord, index) => {
				setTimeout(() => {
					passChord(index);
					poly(chord.length, chord);
				}, 500 * index);
			});
			setTimeout(() => {
				passChord(null);
			}, 500 * 16);
		}
	}
	function poly(voices, chordArray) {
		let polySynth = new Tone.PolySynth(voices, Tone.Synth).toMaster();
		polySynth.triggerAttackRelease(chordArray, '16n');
	}

	// fetch current song
	function _handleClear() {
		onClear(songId);
	}

	// send changes to api
	function _handleSave(event) {
		event.preventDefault();
		onSave(song, songId);
	}

	// delete song from api
	function _handleDelete() {
		onDelete(songId);
	}

	return (
		<div className="ToolbarComponent">
			<h1>Options</h1>
			<button
				className="action-button action-button-replay"
				onClick={_handleReplay}
				disabled={playingChord}>
				{' '}PLAY SONG{' '}
			</button>

			{songId
				? <div className="ToolbarComponent">
						<button className="action-button action-button-save" onClick={_handleSave}>
							{' '}SAVE CHANGES{' '}
						</button>
						<button className="action-button action-button-undo" onClick={_handleClear}>
							{' '}UNDO CHANGES{' '}
						</button>
						<button className="action-button action-button-delete" onClick={_handleDelete}>
							{' '}DELETE SONG{' '}
						</button>
					</div>
				: <div className="ToolbarComponent">
						<button className="action-button action-button-save" onClick={_handleSave}>
							{' '}SAVE NEW{' '}
						</button>
						<button className="action-button action-button-clear" onClick={_handleClear}>
							{' '}CLEAR{' '}
						</button>
					</div>}
		</div>
	);
}
