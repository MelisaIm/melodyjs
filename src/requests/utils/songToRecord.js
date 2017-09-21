export default function songToRecord(melody) {
	return melody.map(row => row.join(',')).join('-');
}
