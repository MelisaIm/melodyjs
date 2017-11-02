import React from 'react';
import { storiesOf } from '@storybook/react';
import LibraryCardComponent from './LibraryCardComponent';
import { MemoryRouter } from 'react-router';

storiesOf('LibraryCardComponent', module)
	.addDecorator(story =>
		<MemoryRouter initialEntries={['/']}>
			{story()}
		</MemoryRouter>
	)
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

				title: 'Morning',
				description: 'Just a wake up song'
			}}
		/>
	)
	.add('No song provided', () => <LibraryCardComponent />);
