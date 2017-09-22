import React from 'react';
import { shallow, mount } from 'enzyme';
import ToolbarComponent from '../components/SoundStudioView/ToolbarComponent';
import { assert } from 'chai';

const shallowWrapper = shallow(
	<ToolbarComponent songId song onReplay onClear onSave onDelete data />
);

describe('Testing ToolbarComponent', () => {
	it('should ', () => {});

	it('should pass the snapshot test', () => {
		expect().toMatchSnapshot();
	});
});
