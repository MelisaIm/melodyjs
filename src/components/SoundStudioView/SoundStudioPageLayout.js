import React from 'react';
import NotesComponent from './NotesComponent';
import ToolbarComponent from './ToolbarComponent';
import InstrumentsComponent from './InstrumentsComponent';
import FooterComponent from '../NavBar/FooterComponent';
import NavBarComponent from '../NavBar/NavBarComponent';
import Form from './Form';

export default function SoundStudioPageLayout({
	notes,
	instruments,
	onReplay,
	onClear,
	onSave,
	onDelete,
	chooseInstrument,
	song,
	updateSong,
	songId,
	data,
	onSaveForm
}) {
	return (
		<div className="Page">
			<NavBarComponent />
			<div className="SoundStudioPageLayout">
				<div className="formlayout">
					<Form
						info={
							data.find(song => song.id === songId)
								? data.find(song => song.id === songId).info
								: null
						}
						songId={songId}
					/>
				</div>
				<div className="left">
					<NotesComponent notes={notes} song={song} updateSong={updateSong} />
				</div>
				<div className="right">
					<ToolbarComponent
						songId={songId}
						song={song}
						onReplay={onReplay}
						onClear={onClear}
						onSave={onSave}
						onDelete={onDelete}
						info={
							data.find(song => song.id === songId)
								? data.find(song => song.id === songId).info
								: null
						}
					/>
					<InstrumentsComponent chooseInstrument={chooseInstrument} instruments={instruments} />
				</div>
			</div>

			<FooterComponent activeKey={3} />
		</div>
	);
}
