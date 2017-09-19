import { configure } from '@storybook/react';
function loadStories() {
	require('../src/index.css');
	// Sound Studio
	require('../src/components/SoundStudioView/NoteComponent.story');
	require('../src/components/SoundStudioView/NotesComponent.story');
	require('../src/components/SoundStudioView/InstrumentComponent.story');
	require('../src/components/SoundStudioView/InstrumentsComponent.story');
	require('../src/components/SoundStudioView/ToolbarComponent.story');
	require('../src/components/SoundStudioView/SoundStudioPage.story');
	require('../src/components/SoundStudioView/SoundStudioPageLayout.story');
	require('../src/components/NavBar/NavBarComponent.story');
	require('../src/components/NavBar/FooterComponent.story');
	// IndexPage & Library
	require('../src/components/IndexView/IndexPage.story');
	require('../src/components/LibraryView/LibraryCardComponent.story');
	require('../src/components/LibraryView/LibraryPageLayout.story');
}
configure(loadStories, module);
