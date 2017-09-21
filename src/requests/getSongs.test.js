import getSongs from './getSongs';
import songToRecord from './utils/songToRecord';
import data from '../data';

describe('getSongs', () => {
	it('Calls fetch and returns songs', () => {
		fetch.mockResponse(JSON.stringify({ records: data.map(songToRecord) }));

		return getSongs({
			AIRTABLE_DATABASE_ID: 'SOME_DATABASE_ID',
			AIRTABLE_TOKEN: 'SOME_TOKEN'
		}).then(songs => {
			expect(songs).toEqual([...data]);
		});
	});

	afterAll(() => {
		fetch.mockReset();
	});
});
