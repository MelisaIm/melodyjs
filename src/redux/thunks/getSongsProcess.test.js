/* eslint-disable import/first */
import getSongsProcess from './getSongsProcess';
jest.mock('../../requests/getSongs');
import getSongs from '../../requests/getSongs';
import env from '../../env';

import data from '../../data';
const thunk = getSongsProcess();
const dispatch = jest.fn();
const getState = () => ({});

describe('getSongsProcess', () => {
	it('should be/return a function', () => {
		expect(typeof thunk).toBe('function');
	});

	it('should call getSongsProcess getSongs()', () => {
		getSongs.mockReturnValueOnce(Promise.resolve(data));

		return thunk(dispatch, getState, env).then(songs => {
			expect(getSongs).toBeCalled();
		});
	});

	it('should return the songs array', () => {
		getSongs.mockReturnValueOnce(Promise.resolve(data));
		return thunk(dispatch, getState, env).then(songs => {
			expect(songs).toEqual(data);
		});
	});

	it('should dispatch GET_SONGS', () => {
		getSongs.mockReturnValueOnce(Promise.resolve(data));
		return thunk(dispatch, getState, env).then(songs => {
			expect(dispatch).toBeCalledWith({
				type: 'GET_SONGS',
				songs
			});
		});
	});
});
