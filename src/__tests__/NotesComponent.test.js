import React from 'react';
import { shallow, mount } from 'enzyme';
import NotesComponent from '../components/SoundStudioView/NotesComponent';
import { assert } from 'chai';

const shallowWrapper = shallow(<NotesComponent notes song updateSong />);

describe('Testing NotesComponent', () => {
	it('should ', () => {
		const NotesComponent = shallowWrapper.find('NotesComponent');
		assert.equal();
	});

	it('should pass the snapshot test', () => {
		expect(shallowWrapper).toMatchSnapshot();
	});
});
