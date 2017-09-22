import rootReducer from './rootReducer';
import deepFreeze from 'deep-freeze';

const songs = [];

const state = {
	data: [],
	song: {
		melody: [
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		],
		info: { title: 'Untitled', description: 'New song' }
	},
	songId: null
};

describe('rootReducer', () => {
	it('action.type SORT_SONGS', () => {
		const action = {
			type: 'SORT_SONGS',
			newsongs: []
		};
		const currentState = {};
		deepFreeze(currentState);
		const nextState = {};

		expect(rootReducer(currentState, action)).toEqual(nextState);
	});

	it('action.type SONG_ID', () => {
		const action = {
			type: 'SONG_ID',
			newsongs: []
		};
		const currentState = {};
		deepFreeze(currentState);
		const nextState = {};

		expect(rootReducer(currentState, action)).toEqual(nextState);
	});

	it('action.type UPDATE_MELODY', () => {
		const action = {
			type: 'UPDATE_MELODY',
			newsongs: []
		};
		const currentState = {};
		deepFreeze(currentState);
		const nextState = {};

		expect(rootReducer(currentState, action)).toEqual(nextState);
	});

	it('action.type GET_SONGS', () => {
		const action = {
			type: 'GET_SONGS',
			newsongs: []
		};
		const currentState = {};
		deepFreeze(currentState);
		const nextState = {};

		expect(rootReducer(currentState, action)).toEqual(nextState);
	});

	it('action.type GET_SONG', () => {
		const action = {
			type: 'GET_SONG',
			newsongs: []
		};
		const currentState = {};
		deepFreeze(currentState);
		const nextState = {};

		expect(rootReducer(currentState, action)).toEqual(nextState);
	});

	it('action.type CREATE_SONG', () => {
		const action = {
			type: 'CREATE_SONG',
			newsongs: []
		};
		const currentState = {};
		deepFreeze(currentState);
		const nextState = {};

		expect(rootReducer(currentState, action)).toEqual(nextState);
	});

	it('action.type UPDATE_SONG', () => {
		const action = {
			type: 'UPDATE_SONG',
			newsongs: []
		};
		const currentState = {};
		deepFreeze(currentState);
		const nextState = {};

		expect(rootReducer(currentState, action)).toEqual(nextState);

		it('action.type CHANGE_TITLE', () => {
			const action = {
				type: 'CHANGE_TITLE',
				newsongs: []
			};
			const currentState = {};
			deepFreeze(currentState);
			const nextState = {};

			expect(rootReducer(currentState, action)).toEqual(nextState);
		});

		it('action.type CHANGE_DESCRIPTION', () => {
			const action = {
				type: 'CHANGE_DESCRIPTION',
				newsongs: []
			};
			const currentState = {};
			deepFreeze(currentState);
			const nextState = {};

			expect(rootReducer(currentState, action)).toEqual(nextState);
		});

		it('action.type CLEAR_CHANGE', () => {
			const action = {
				type: 'CLEAR_CHANGE',
				newsongs: []
			};
			const currentState = {};
			deepFreeze(currentState);
			const nextState = {};

			expect(rootReducer(currentState, action)).toEqual(nextState);
		});

		it('action.type CLEAR_ALL', () => {
			const action = {
				type: 'CLEAR_ALL',
				newsongs: []
			};
			const currentState = {};
			deepFreeze(currentState);
			const nextState = {};

			expect(rootReducer(currentState, action)).toEqual(nextState);
		});
	});
});
