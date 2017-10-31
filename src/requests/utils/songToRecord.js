export default function songToRecord(song) {
	const record = { fields: {} };
	if (song.id) record.id = song.id;
	if (song.info.title) record.fields.title = song.info.title;
	if (song.info.description) record.fields.description = song.info.description;
	return record;
}
