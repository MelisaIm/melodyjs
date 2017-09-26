import React from 'react';
import SoundStudioPageLayout from './SoundStudioPageLayout';

export default function SoundStudioPage({
	songId,
	song,
	notes,
	instruments,
	onReplay,
	onClear,
	onSave,
	onDelete,
	chooseInstrument,
	updateSongLocally,
	data,
	onEditForm,
	passChord,
	playingChord,
	history
}) {
	return (
		<div className="SoundStudioPage">
			<SoundStudioPageLayout
				songId={songId}
				song={song}
				notes={notes}
				instruments={instruments}
				onReplay={onReplay}
				onClear={onClear}
				onSave={onSave}
				onDelete={onDelete}
				chooseInstrument={chooseInstrument}
				updateSong={updateSongLocally}
				data={data}
				onEditForm={onEditForm}
				playingChord={playingChord}
				passChord={passChord}
				history={history}
			/>
		</div>
	);
}
