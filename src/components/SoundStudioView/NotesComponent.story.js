import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesComponent from './NotesComponent';

storiesOf('NotesComponent', module).add('Happy Path', () =>
	<NotesComponent notes={['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']} />
);
