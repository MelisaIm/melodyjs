import React from 'react';
import { storiesOf } from '@storybook/react';
import FooterComponent from './FooterComponent';
import { MemoryRouter } from 'react-router';

storiesOf('FooterComponent', module)
	.addDecorator(story =>
		<MemoryRouter initialEntries={['/']}>
			{story()}
		</MemoryRouter>
	)
	.add('HappyPath', () => <FooterComponent />);
