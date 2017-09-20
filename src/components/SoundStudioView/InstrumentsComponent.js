import React from 'react';
import InstrumentComponent from './InstrumentComponent';

export default function InstrumentsComponent({ chooseInstrument, instruments }) {
	return (
		<div className="InstrumentsComponent">
			<h1>Playback Instrument</h1>
			<h6>CHOOSE ONE</h6>
			{instruments.map(instrument =>
				<InstrumentComponent
					name={instrument}
					chooseInstrument={chooseInstrument}
					key={instrument}
				/>
			)}
		</div>
	);
}
