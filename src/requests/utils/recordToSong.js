export default function recordToSong(record) {
	return {
		id: record.id,
		title: record.fields.title,
		description: record.fields.description,
		rows: record.fields.rows
			? record.fields.rows.split('-').map(array =>
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
