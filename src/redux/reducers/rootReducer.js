export default function rootReducer(
	currentState = {
		data: []
	},
	action
) {
	switch (action.type) {
		case 'GET_SONGS':
			return {};
		case 'GET_SONG':
			return {};
		case 'UPDATE_SONGS':
			return {};
		default:
			return currentState;
	}
}
