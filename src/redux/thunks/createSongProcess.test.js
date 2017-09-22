/* eslint-disable import/first */
import updateSongProcess from './updateSongProcess';
jest.mock('../../requests/updateSong');
import updateSong from '../../requests/updateSong';
import env from '../../env';

import data from '../../data';

let fetchedSong = data[0];

let changedSong = {
	...fetchedSong,
	melody: [
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 'D4', 'D4', 'D4', 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 'E4', 0, 'E4', 0, 'E4', 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 'F4', 0, 0, 'F4', 0, 0, 'F4', 0, 0, 0, 0],
		[0, 0, 0, 0, 'G4', 0, 0, 0, 'G4', 0, 0, 0, 'G4', 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 'A4', 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 'B4', 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 'C4', 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 'E3', 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 'F3', 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 'G3', 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 'A3', 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 'B3', 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	]
};
const thunk = updateSongProcess(changedSong.id, changedSong);
const dispatch = jest.fn();
const getState = () => ({});

describe('updateSongProcess', () => {
	it('should be/return a function', () => {
		expect(typeof thunk).toBe('function');
	});

	it('should call updateSongProcess updateSong()', () => {
		updateSong.mockReturnValueOnce(Promise.resolve(changedSong));

		return thunk(dispatch, getState, env).then(song => {
			expect(updateSong).toBeCalled();
		});
	});

	it('should return the song with changes', () => {
		updateSong.mockReturnValueOnce(Promise.resolve(changedSong));
		return thunk(dispatch, getState, env).then(song => {
			expect(song).toEqual(changedSong);
		});
	});

	it('should dispatch GET_SONG', () => {
		updateSong.mockReturnValueOnce(Promise.resolve(changedSong));
		return thunk(dispatch, getState, env).then(song => {
			expect(dispatch).toBeCalledWith({
				type: 'UPDATE_SONG',
				song
			});
		});
	});
});
