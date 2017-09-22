export default function recordToSong(record) {
	return {
		id: record.id,
		info: {
			title: record.fields.title ? record.fields.title : '',
			description: record.fields.description ? record.fields.description : ''
		},
		createdTime: record.createdTime,
		melody: record.fields.melody
			? record.fields.melody.split('-').map(array =>
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
