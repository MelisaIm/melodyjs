import React from 'react';
import SoundStudioPageLayout from './SoundStudioPageLayout';

export default function SoundStudioPage({
	notes,
	instruments,
	onReplay,
	onClear,
	onSave,
	onDelete
}) {
	return (
		<div className="SoundStudioPage">
			<SoundStudioPageLayout
				notes={notes}
				instruments={instruments}
				onReplay={onReplay}
				onClear={onClear}
				onSave={onSave}
				onDelete={onDelete}
			/>
		</div>
	);
}
