import React from 'react';

export default function ToolbarComponent() {
	function _handleReplay() {}

	function _handleClear() {}

	function _handleSave() {}

	function _handleDelete() {}

	return (
		<div className="ToolbarComponent">
			<h1>Options</h1>
			<button className="action-button" onClick={_handleReplay}>
				{' '}REPLAY SONG{' '}
			</button>
			<button className="action-button" onClick={_handleClear}>
				{' '}CLEAR CHANGES{' '}
			</button>
			<button className="action-button" onClick={_handleSave}>
				{' '}SAVE PROGRESS{' '}
			</button>
			<button className="action-button" onClick={_handleDelete}>
				{' '}DELETE SONG{' '}
			</button>
		</div>
	);
}
