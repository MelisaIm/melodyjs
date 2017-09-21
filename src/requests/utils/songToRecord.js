import melodyToString from './melodyToString';

export default function songToRecord(song) {
	const record = { fields: {} };
	if (song.id) record.id = song.id;
	if (song.info.title) record.fields.title = song.info.title;
	if (song.info.description) record.fields.description = song.info.description;
	if (song.melody) record.fields.melody = melodyToString(song.melody);
	return record;
}
