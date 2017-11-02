import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import SoundStudioPage from './SoundStudioPage';

storiesOf('SoundStudioPage', module)
	.addDecorator(story =>
		<MemoryRouter initialEntries={['/']}>
			{story()}
		</MemoryRouter>
	)
	.add('Happy Path', () =>
		<SoundStudioPage
			notes={['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']}
			onSelect={() => {}}
			instruments={['Synth']}
			onReplay={() => {}}
			onClear={() => {}}
			onSave={() => {}}
			onDelete={() => {}}
			chooseInstrument={() => {}}
		/>
	);
