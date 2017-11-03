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
	onEditForm,
	passChord,
	playingChord,
	history,
	loggedUser
}) {
	return (
		<div className="Page">
			<NavBarComponent loggedUser={localStorage.getItem('token') ? true : false} />
			<div className="SoundStudioPageLayout">
				<div className="formlayout">
					<Form
						data={data}
						songId={songId}
						onEditForm={onEditForm}
						song={song}
						loggedUser={loggedUser}
					/>
				</div>
				<div className="left">
					<NotesComponent
						notes={notes}
						song={song}
						updateSong={updateSong}
						playingChord={playingChord}
					/>
					<div className="songInfo" />
					{`Composed by: ${data.find(tune => tune.id === song.id)
						? data.find(tune => tune.id === song.id).userName
						: 'UNKNOWN'} on ${data.find(tune => tune.id === song.id)
						? new Date(Date.parse(data.find(tune => tune.id === song.id).createdAt)).toDateString()
						: ''}`}
				</div>
				<div className="right">
					<ToolbarComponent
						loggedUser={loggedUser}
						history={history}
						songId={songId}
						song={song}
						onReplay={onReplay}
						onClear={onClear}
						onSave={onSave}
						onDelete={onDelete}
						data={data}
						passChord={passChord}
						playingChord={playingChord}
					/>
					<InstrumentsComponent chooseInstrument={chooseInstrument} instruments={instruments} />
				</div>
			</div>

			<FooterComponent activeKey={3} />
		</div>
	);
}
