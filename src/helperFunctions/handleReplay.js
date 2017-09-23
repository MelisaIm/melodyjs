import Tone from 'tone';

export default function handleReplay(song, passChord) {
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
