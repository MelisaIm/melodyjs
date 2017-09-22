import React from 'react';
import { shallow, mount } from 'enzyme';
import LibraryCardComponent from '../components/LibraryView/LibraryCardComponent';
import { assert } from 'chai';

const shallowWrapper = shallow(<LibraryCardComponent song key />);

describe('Testing LibraryCardComponent', () => {
	it('should ', () => {
		assert.equal();
	});

	it('should pass the snapshot test', () => {});
});
