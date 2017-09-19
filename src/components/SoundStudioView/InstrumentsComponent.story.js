import React from 'react';
import { storiesOf } from '@storybook/react';
import InstrumentsComponent from './InstrumentsComponent';

storiesOf('InstrumentsComponent', module).add('Happy Path', () => {
	return <InstrumentsComponent instruments={['']} />;
});
