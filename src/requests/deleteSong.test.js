import deleteSong from './deleteSong';

const data = {
	id: 101,
	melody: [
		[0, 0, 0, 0, 0, 0, 0, 0, 'C5', 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 'D4', 'D4', 'D4', 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 'E4', 0, 'E4', 0, 'E4', 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 'F4', 0, 0, 'F4', 0, 0, 'F4', 0, 0, 0, 0],
		[0, 0, 0, 0, 'G4', 0, 0, 0, 'G4', 0, 0, 0, 'G4', 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 'A4', 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 'B4', 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 'C4', 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 'D3', 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 'E3', 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 'F3', 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 'G3', 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 'A3', 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 'B3', 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 'C3', 0, 0, 0, 0, 0, 0, 0]
	],
	info: {
		title: 'hello',
		description: 'just some song'
	}
};

describe('deleteSong', () => {
	it('Calls fetch and returns a success message', () => {
		fetch.mockResponse(JSON.stringify(data));

		return deleteSong(data.id, {
			AIRTABLE_DATABASE_ID: 'SOME_DATABASE_ID',
			AIRTABLE_TOKEN: 'SOME_TOKEN'
		}).then(result => {
			expect(result).toEqual();
		});
	});

	afterAll(() => {
		fetch.mockReset();
	});
});
