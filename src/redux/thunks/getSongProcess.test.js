/* eslint-disable import/first */
import getSongProcess from './getSongProcess';
jest.mock('../../requests/getSong');
import getSong from '../../requests/getSong';
import env from '../../env';

import data from '../../data';
const thunk = getSongProcess();
const dispatch = jest.fn();
const getState = () => ({});

let fetchedSong = data[0];

describe('getSongProcess', () => {
	it('should be/return a function', () => {
		expect(typeof thunk).toBe('function');
	});

	it('should call getSongProcess getSong()', () => {
		getSong.mockReturnValueOnce(Promise.resolve(fetchedSong));

		return thunk(dispatch, getState, env).then(song => {
			expect(getSong).toBeCalled();
		});
	});

	it('should return the song', () => {
		getSong.mockReturnValueOnce(Promise.resolve(fetchedSong));
		return thunk(dispatch, getState, env).then(song => {
			expect(song).toEqual(fetchedSong);
		});
	});

	it('should dispatch GET_SONG', () => {
		getSong.mockReturnValueOnce(Promise.resolve(fetchedSong));
		return thunk(dispatch, getState, env).then(song => {
			expect(dispatch).toBeCalledWith({
				type: 'GET_SONG',
				song
			});
		});
	});
});
