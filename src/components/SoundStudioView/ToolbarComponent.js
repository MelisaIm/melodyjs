import React from 'react';
import handleReplay from 'helperFunctions/handleReplay';

export default function ToolbarComponent({
	songId,
	song,
	onReplay,
	onClear,
	onSave,
	onDelete,
	info,
	passChord,
	playingChord,
	history
}) {
	function _handleReplay() {
		handleReplay(song, passChord);
	}

	// fetch current song
	function _handleClear() {
		onClear(songId);
	}

	// send changes to api
	function _handleSave(event) {
		event.preventDefault();
		onSave(song, songId, history);
	}

	// delete song from api
	function _handleDelete() {
		onDelete(songId, history);
	}

	return (
		<div className="ToolbarComponent">
			<h1>Options</h1>
			<button
				className="action-button action-button-replay"
				onClick={_handleReplay}
				disabled={playingChord}>
				{' '}PLAY SONG{' '}
			</button>

			{songId
				? <div className="ToolbarComponent">
						<button
							className="action-button action-button-save"
							onClick={_handleSave}
							disabled={playingChord}>
							{' '}SAVE CHANGES{' '}
						</button>
						<button
							className="action-button action-button-undo"
							onClick={_handleClear}
							disabled={playingChord}>
							{' '}UNDO CHANGES{' '}
						</button>
						<button
							className="action-button action-button-delete"
							onClick={_handleDelete}
							disabled={playingChord}>
							{' '}DELETE SONG{' '}
						</button>
					</div>
				: <div className="ToolbarComponent">
						<button
							className="action-button action-button-save"
							onClick={_handleSave}
							disabled={playingChord}>
							{' '}SAVE NEW{' '}
						</button>
						<button
							className="action-button action-button-clear"
							onClick={_handleClear}
							disabled={playingChord}>
							{' '}CLEAR{' '}
						</button>
					</div>}
		</div>
	);
}
