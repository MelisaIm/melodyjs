import { configure } from '@storybook/react';
function loadStories() {
	require('../src/index.css');
	require('../src/components/SoundStudioView/NoteComponent.story');
	require('../src/components/SoundStudioView/NotesComponent.story');
	require('../src/components/SoundStudioView/InstrumentComponent.story');
	require('../src/components/SoundStudioView/InstrumentsComponent.story');
	require('../src/components/SoundStudioView/ToolbarComponent.story');
	require('../src/components/SoundStudioView/SoundStudioPage.story');
	require('../src/components/SoundStudioView/SoundStudioPageLayout.story');
}
configure(loadStories, module);
