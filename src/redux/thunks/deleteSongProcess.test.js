/* eslint-disable import/first */
import deleteSongProcess from './deleteSongProcess';
jest.mock('../../requests/deleteSong');
import deleteSong from '../../requests/deleteSong';
import env from '../../env';

import data from '../../data';

let songData = data[0];

const thunk = deleteSongProcess(songData.id);
const dispatch = jest.fn();
const getState = () => ({});

describe('deleteSongProcess', () => {
	it('should be/return a function', () => {
		expect(typeof thunk).toBe('function');
	});

	it('should call deleteSongProcess deleteSong()', () => {
		deleteSong.mockReturnValueOnce(Promise.resolve());

		return thunk(dispatch, getState, env).then(song => {
			expect(deleteSong).toBeCalled();
		});
	});

	it('should return no song', () => {
		deleteSong.mockReturnValueOnce(Promise.resolve());
		return thunk(dispatch, getState, env).then(song => {
			expect(song).toEqual();
		});
	});

	it('should dispatch DELETE_SONG', () => {
		deleteSong.mockReturnValueOnce(Promise.resolve());
		return thunk(dispatch, getState, env).then(song => {
			expect(dispatch).toBeCalledWith({
				type: 'DELETE_SONG',
				id: songData.id
			});
		});
	});
});
