import rootReducer from './rootReducer';
import deepFreeze from 'deep-freeze';
import sortedSongs from './sorted-data';
import unsortedSongs from './unsorted-data';

const state = {
	data: unsortedSongs,
	sortedSongs: null,
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

const stateSorted = {
	data: unsortedSongs,
	sortedSongs: sortedSongs,
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
	it('action.type CLEAR_SORTED', () => {
		const action = {
			type: 'CLEAR_SORTED'
		};
		const currentState = stateSorted;
		deepFreeze(currentState);
		const nextState = state;

		expect(rootReducer(currentState, action)).toEqual(nextState);
	});

	it('action.type SORTED_SONGS', () => {
		const action = {
			type: 'SORTED_SONGS',
			newsongs: sortedSongs
		};
		const currentState = state;
		deepFreeze(currentState);
		const nextState = { ...stateSorted, sortedSongs: sortedSongs };

		expect(rootReducer(currentState, action)).toEqual(nextState);
	});

	it('action.type SONG_ID', () => {
		const action = {
			type: 'SONG_ID',
			id: 101
		};
		const currentState = state;
		deepFreeze(currentState);
		const nextState = { ...state, songId: 101 };

		expect(rootReducer(currentState, action)).toEqual(nextState);
	});

	it('action.type UPDATE_MELODY', () => {
		const action = {
			type: 'UPDATE_MELODY',
			melody: [
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 'C4', 0, 0, 0, 0, 0, 0, 0, 0],
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
			]
		};
		const currentState = state;
		deepFreeze(currentState);
		const nextState = {
			...state,
			song: {
				...state.song,
				melody: [
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 'C4', 0, 0, 0, 0, 0, 0, 0, 0],
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
				]
			}
		};

		expect(rootReducer(currentState, action)).toEqual(nextState);
	});

	it('action.type GET_SONGS', () => {
		const action = {
			type: 'GET_SONGS',
			songs: unsortedSongs
		};
		const currentState = { ...state, data: [] };
		deepFreeze(currentState);
		const nextState = state;

		expect(rootReducer(currentState, action)).toEqual(nextState);
	});

	it('action.type GET_SONG', () => {
		const action = {
			type: 'GET_SONG',
			song: sortedSongs[0]
		};
		const currentState = state;
		deepFreeze(currentState);
		const nextState = { ...state, song: action.song };

		expect(rootReducer(currentState, action)).toEqual(nextState);
	});

	it('action.type CREATE_SONG', () => {
		const action = {
			type: 'CREATE_SONG',
			song: [
				{
					id: 110,
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
						title: 'lookning up',
						description: 'new song'
					}
				}
			]
		};
		const currentState = state;
		deepFreeze(currentState);
		const nextState = { ...state, song: action.song, data: [...state.data, action.song] };

		expect(rootReducer(currentState, action)).toEqual(nextState);
	});

	it('action.type UPDATE_SONG', () => {
		const action = {
			type: 'UPDATE_SONG',
			song: sortedSongs[0]
		};
		const currentState = { ...state, data: sortedSongs };
		deepFreeze(currentState);
		const newArray = sortedSongs.slice();
		newArray.splice(newArray.indexOf(action.song.id), 1, action.song);
		const nextState = { ...state, data: newArray, song: action.song };

		expect(rootReducer(currentState, action)).toEqual(nextState);
	});
	it('action.type CHANGE_TITLE', () => {
		const action = {
			type: 'CHANGE_TITLE',
			title: 'BEEP'
		};
		const currentState = state;
		deepFreeze(currentState);
		const nextState = {
			...state,
			song: { ...state.song, info: { ...state.song.info, title: action.title } }
		};

		expect(rootReducer(currentState, action)).toEqual(nextState);
	});

	it('action.type CHANGE_DESCRIPTION', () => {
		const action = {
			type: 'CHANGE_DESCRIPTION',
			description: 'new text'
		};
		const currentState = state;
		deepFreeze(currentState);
		const nextState = {
			...state,
			song: { ...state.song, info: { ...state.song.info, description: action.description } }
		};

		expect(rootReducer(currentState, action)).toEqual(nextState);
	});

	it('action.type CLEAR_CHANGE', () => {
		const action = {
			type: 'CLEAR_CHANGE',
			song: sortedSongs[0]
		};
		const currentState = state;
		deepFreeze(currentState);
		const nextState = { ...state, song: action.song };

		expect(rootReducer(currentState, action)).toEqual(nextState);
	});

	it('action.type CLEAR_PAGE', () => {
		const action = {
			type: 'CLEAR_PAGE'
		};
		const currentState = { ...state, song: sortedSongs[0] };
		deepFreeze(currentState);
		const nextState = state;

		expect(rootReducer(currentState, action)).toEqual(nextState);
	});

	it('action.type CLEAR_ALL', () => {
		const action = {
			type: 'CLEAR_ALL'
		};
		const currentState = {
			data: unsortedSongs,
			sortedSongs: sortedSongs,
			song: {
				melody: [
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 'C4', 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 'D5', 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
				],
				info: { title: 'Untitled', description: 'New song' }
			},
			songId: null
		};
		deepFreeze(currentState);
		const nextState = stateSorted;

		expect(rootReducer(currentState, action)).toEqual(nextState);
	});
});
