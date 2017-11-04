import React from 'react';
import NotesComponent from './NotesComponent';
import ToolbarComponent from './ToolbarComponent';
import InstrumentsComponent from './InstrumentsComponent';
import FooterComponent from '../NavBar/FooterComponent';
import NavBarComponent from '../NavBar/NavBarComponent';
import Form from './Form';
import TagDisplayComponent from '../Tags/TagDisplayComponent';
import TagInputComponent from '../Tags/TagInputComponent';

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
	loggedUser,
	addTags
}) {
	if (history.location.pathname === '/studio') {
		return (
			<div className="Page">
				<NavBarComponent loggedUser={loggedUser} />
				<div className="SoundStudioPageLayout">
					<div className="formlayout">
						<Form
							data={data}
							songId={songId}
							onEditForm={onEditForm}
							song={song}
							loggedUser={loggedUser}
						/>
						<TagInputComponent
							addTags={addTags}
							tags={song.tags}
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
						<TagDisplayComponent tags={[song.tags]} song={song} />
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
	} else {
		return (
			<div className="Page">
				<NavBarComponent loggedUser={loggedUser} />
				<div className="SoundStudioPageLayout">
					{loggedUser && loggedUser.id === song.authorId
						? <div className="formlayout">
								<Form
									data={data}
									songId={songId}
									onEditForm={onEditForm}
									song={song}
									loggedUser={loggedUser}
								/>
								<TagInputComponent
									addTags={addTags}
									tags={song.tags}
									song={song}
									loggedUser={loggedUser}
								/>
							</div>
						: <div className="formlayout songtitleDisplay">
								<div>
									<h3>
										{song.title}
									</h3>
								</div>
								<div>
									<p>
										{song.description}
									</p>
								</div>
							</div>}
					<div className="left">
						<NotesComponent
							notes={notes}
							song={song}
							updateSong={updateSong}
							playingChord={playingChord}
						/>
						<div className="songInfo" />

						{data && data.length > 0 && song.id
							? `Composed by: ${data.find(tune => tune.id === song.id).userName} on
					${new Date(Date.parse(data.find(tune => tune.id === song.id).createdAt)).toDateString()}`
							: null}
						<TagDisplayComponent tags={song.tags} song={song} />
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
}
