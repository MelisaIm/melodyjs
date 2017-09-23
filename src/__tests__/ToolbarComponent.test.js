import React from 'react';
import { shallow, mount } from 'enzyme';
import ToolbarComponent from '../components/SoundStudioView/ToolbarComponent';
import { assert } from 'chai';

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

const onReplay = jest.fn();
const onClear = jest.fn();
const onSave = jest.fn();
const onDelete = jest.fn();

const shallowWrapper = shallow(
	<ToolbarComponent
		songId={song.id}
		song={song}
		onReplay={onReplay}
		onClear={onClear}
		onSave={onSave}
		onDelete={onDelete}
		data={[]}
	/>
);

describe('Testing ToolbarComponent', () => {
	it('should call onClear()', () => {
		shallowWrapper.find('.action-button-undo').simulate('click');
		expect(onClear).toHaveBeenCalled();
	});

	xit('should call onReplay()', () => {
		shallowWrapper.find('.action-button-replay').simulate('click');
		expect(onReplay).toHaveBeenCalled();
		// NOTE: some ToneJS errors when running tests
	});

	it('should call onSave()', () => {
		shallowWrapper.find('.action-button-save').simulate('click');
		expect(onSave).toHaveBeenCalled();
	});

	xit('should call onDelete()', () => {});

	it('should pass the snapshot test', () => {
		expect(shallowWrapper).toMatchSnapshot();
	});
});
