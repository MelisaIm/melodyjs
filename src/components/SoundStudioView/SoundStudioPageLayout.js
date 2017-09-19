import React from 'react';
import NotesComponent from './NotesComponent';
import ToolbarComponent from './ToolbarComponent';
import InstrumentsComponent from './InstrumentsComponent';
import FooterComponent from '../NavBar/FooterComponent';
import NavBarComponent from '../NavBar/NavBarComponent';

export default function SoundStudioPageLayout({
	notes,
	instruments,
	onReplay,
	onClear,
	onSave,
	onDelete,
	chooseInstrument
}) {
	return (
		<div className="SoundStudioPageLayout">
			<NavBarComponent />
			<div className="left">
				<NotesComponent notes={notes} />
			</div>
			<div className="right">
				<ToolbarComponent
					onReplay={onReplay}
					onClear={onClear}
					onSave={onSave}
					onDelete={onDelete}
				/>
				<InstrumentsComponent chooseInstrument={chooseInstrument} instruments={instruments} />
			</div>
			<FooterComponent />
		</div>
	);
}
