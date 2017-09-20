export default function recordToSong(record) {
	return {
		id: record.id,
		info: { title: record.fields.title, description: record.fields.description },
		song: record.fields.song
			? record.fields.song.split('-').map(array =>
					array.split(',').map(digit => {
						if (parseInt(digit, 10) === 0) {
							return 0;
						} else {
							return digit;
						}
					})
				)
			: []
	};
}
