import React from 'react';
import { storiesOf } from '@storybook/react';
import IndexPage from './IndexPage';
import { MemoryRouter } from 'react-router';

storiesOf('IndexPage', module)
	.addDecorator(story =>
		<MemoryRouter initialEntries={['/']}>
			{story()}
		</MemoryRouter>
	)
	.add('Happy Path', () => <IndexPage />);
