export default function melodyToString(melody) {
	return melody.map(row => row.join(',')).join('-');
}
