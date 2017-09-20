export default function songToRecord(song) {
	return song.map(row => row.join(',')).join('-');
}
