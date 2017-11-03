import { storiesOf } from '@storybook/react';
import React from 'react';
import TagDisplayComponent from './TagDisplayComponent';

storiesOf('TagDisplayComponent', module).add('Happy Path', () =>
	<TagDisplayComponent tags={['hi', 'new', 'original']} />
);
