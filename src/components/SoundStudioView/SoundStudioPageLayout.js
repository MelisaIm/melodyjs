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
	chooseInstrument,
	song,
	updateSong
}) {
	return (
		<div className="Page">
			<NavBarComponent />
			<div className="SoundStudioPageLayout">
				<div className="left">
					<NotesComponent notes={notes} song={song} updateSong={updateSong} />
				</div>
				<div className="right">
					<ToolbarComponent
						song={song}
						onReplay={onReplay}
						onClear={onClear}
						onSave={onSave}
						onDelete={onDelete}
					/>
					<InstrumentsComponent chooseInstrument={chooseInstrument} instruments={instruments} />
				</div>
			</div>
			<FooterComponent activeKey={3} />
		</div>
	);
}
