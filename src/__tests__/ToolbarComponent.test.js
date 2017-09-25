/* eslint-disable import/first */

import React from 'react';
import { shallow, mount } from 'enzyme';
import ToolbarComponent from '../components/SoundStudioView/ToolbarComponent';
import { assert } from 'chai';
jest.mock('helperFunctions/handleReplay');
import handleReplay from 'helperFunctions/handleReplay';

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

const shallowWrapperNoID = shallow(
	<ToolbarComponent
		songId={null}
		song={null}
		onReplay={onReplay}
		onClear={onClear}
		onSave={onSave}
		onDelete={onDelete}
		data={[]}
	/>
);

describe('Testing ToolbarComponent', () => {
	it('should show 4 buttons instead of 3 when there is a song ID', () => {
		const buttons = shallowWrapper.find('.action-button');
		assert.equal(buttons.length, 4);
	});

	it('should call onClear()', () => {
		shallowWrapper.find('.action-button-undo').simulate('click');
		expect(onClear).toHaveBeenCalled();
	});

	it('should call handleReplay()', () => {
		shallowWrapper.find('.action-button-replay').simulate('click');
		expect(handleReplay).toHaveBeenCalled();
	});

	it('should call onSave()', () => {
		shallowWrapper.find('.action-button-save').simulate('click', { preventDefault() {} });
		expect(onSave).toHaveBeenCalled();
	});

	it('should call onDelete()', () => {
		shallowWrapper.find('.action-button-delete').simulate('click');
		expect(onDelete).toHaveBeenCalled();
	});

	it('should show 3 buttons instead of 4 when there is no song ID', () => {
		const buttons = shallowWrapperNoID.find('.action-button');
		assert.equal(buttons.length, 3);
	});

	it('should pass the snapshot test', () => {
		expect(shallowWrapper).toMatchSnapshot();
	});
});
