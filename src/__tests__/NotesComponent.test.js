import React from 'react';
import { shallow, mount } from 'enzyme';
import NotesComponent from '../components/SoundStudioView/NotesComponent';
import { assert } from 'chai';

describe('Testing NotesComponent', () => {
	const song = {
		id: 101,
		melody: [
			['C5', 0, 0, 0, 0, 0, 0, 0, 'C5', 0, 0, 0, 0, 0, 0, 0],
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
			title: 'abacus',
			description: 'just some song'
		}
	};
	const updateSong = jest.fn();
	const notes = [
		'C5',
		'B4',
		'A4',
		'G4',
		'F4',
		'E4',
		'D4',
		'C4',
		'B3',
		'A3',
		'G3',
		'F3',
		'E3',
		'D3',
		'C3'
	];

	const shallowWrapper = shallow(
		<NotesComponent notes={notes} song={song} updateSong={updateSong} />
	);
	const fullWrapper = mount(<NotesComponent notes={notes} song={song} updateSong={updateSong} />);

	// it('NotesComponent renders 240 NoteComponents', () => {
	// 	const Notes = shallowWrapper.find('NoteComponent');
	// 	assert.equal(Notes.length, 240);
	// });

	// xit('should call updateSong', () => {
	// 	fullWrapper.find('NoteComponent').first().simulate('click');
	// 	expect(updateSong).toHaveBeenCalled();
	// });

	it('should pass the snapshot test', () => {
		expect(shallowWrapper).toMatchSnapshot();
	});
});
