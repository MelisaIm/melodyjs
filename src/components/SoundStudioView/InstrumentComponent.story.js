import React from 'react';
import { storiesOf } from '@storybook/react';
import InstrumentComponent from './InstrumentComponent';

storiesOf('InstrumentComponent', module).add('Happy Path', () => {
	function chooseInstrument() {}
	return <InstrumentComponent name="Synth" chooseInstrument={chooseInstrument} />;
});
