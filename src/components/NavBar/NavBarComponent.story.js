import React from 'react';
import { storiesOf } from '@storybook/react';
import NavBarComponent from './NavBarComponent';
import { MemoryRouter } from 'react-router';

storiesOf('NavBarComponent', module)
	.addDecorator(story =>
		<MemoryRouter initialEntries={['/']}>
			{story()}
		</MemoryRouter>
	)
	.add('Happy Path', () => <NavBarComponent />);
