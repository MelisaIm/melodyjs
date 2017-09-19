import React from 'react';
import { storiesOf } from '@storybook/react';
import NoteComponent from './NoteComponent';

storiesOf('NoteComponent', module)
	.add('Unselected Note', () => <NoteComponent selected={false} />)
	.add('Selected Note', () => <NoteComponent selected={true} />);
