import React from 'react';
import { storiesOf } from '@storybook/react';
import LibraryCardComponent from './LibraryCardComponent';

storiesOf('LibraryCardComponent', module)
	.add('Happy Path', () =>
		<LibraryCardComponent
			song={{
				melody: [
					[0, 0, 0, 0, 0, 0, 0, 0, 'X', 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 'X', 'X', 'X', 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 'X', 0, 'X', 0, 'X', 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 'X', 0, 0, 'X', 0, 0, 'X', 0, 0, 0, 0],
					[0, 0, 0, 0, 'X', 0, 0, 0, 'X', 0, 0, 0, 'X', 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 'X', 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 'X', 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 'X', 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 'X', 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 'X', 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 'X', 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 'X', 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 'X', 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 'X', 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 'X', 0, 0, 0, 0, 0, 0, 0]
				],
				info: {
					title: 'Morning',
					description: 'Just a wake up song'
				}
			}}
		/>
	)
	.add('No song provided', () => <LibraryCardComponent />);
