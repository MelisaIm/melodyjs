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
	onEditForm
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
			/>
		</div>
	);
}

// constructor(props) {
// 	super(props);
//
// 	this.state = {
// 		song: {
// 			melody: [
// 				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// 			],
// 			info: { title: '', description: '' }
// 		}
// 	};

// this.props.store.subscribe(() => {
// 	this.setState(this.props.store.getState());
// });
// }

// dispatch UPDATE_SONG
// updateSongLocally = newSong => {
// 	this.setState(prevState => {
// 		const updatedSong = { ...prevState.song, melody: newSong };
// 		return { song: updatedSong };
// 	});
// };
//
// chooseInstrument = instrument => {
// 	console.log(instrument);
// };

// dispatch CLEAR CHANGES
// getSongProcess
// onClear = id => {
// 	console.log(id);
// 	if (id) {
// 		getSongProcess(id);
// getSong(id, {
// 	databaseId: 'appxhHjmck1PuVaSU',
// 	token: 'keymBy1TajObCCmUW'
// }).then(song => {
// 	this.setState({ song });
// });
// } else {
// dispatch CLEAR ALL
// this.props.store.dispatch({ type: 'CLEAR_ALL' });
// this.setState(prevState => {
// 	const updatedSong = {
// 		...prevState.song,
// 		melody: [
// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// 		]
// 	};
// 	return { song: updatedSong };
// });
// 	}
// };

// onEditForm = changes => {
// 	if (changes.title !== undefined) {
// 		this.setState(prevState => {
// 			return {
// 				song: {
// 					...prevState.song,
// 					info: {
// 						...prevState.song.info,
// 						title: changes.title,
// 						description: prevState.song.info.description
// 					}
// 				}
// 			};
// 		});
// 	} else {
// 		this.setState(prevState => {
// 			return {
// 				song: {
// 					...prevState.song,
// 					info: {
// 						...prevState.song.info,
// 						title: prevState.song.info.title,
// 						description: changes.description
// 					}
// 				}
// 			};
// 		});
// 	}
// updateSong({});
// };

// dispatch UPDATE_SONG
// updateSong Process
// onSave = (song, id) => {
// 	if (id) {
// 		const update = melodyToString(song.melody);
// 		song = { ...song, melody: update };
// 		updateSong(id, song, {
// 			databaseId: 'appxhHjmck1PuVaSU',
// 			token: 'keymBy1TajObCCmUW'
// 		}).then(song => {
// 			this.props.updateData();
// 			this.setState({ song: song });
// 		});
// 	} else {
// 		// dispatch CREATE SONG
// 		createSong(song, {
// 			databaseId: 'appxhHjmck1PuVaSU',
// 			token: 'keymBy1TajObCCmUW'
// 		}).then(song => {
// 			console.log(song);
// 			this.props.updateData();
// 			this.setState({ song: song });
// 		});
// 	}
// };

// dispatch DELETE_SONG
// deleteSongProcess thunk
// onDelete = songId => {
// 	deleteSong(songId, {
// 		databaseId: 'appxhHjmck1PuVaSU',
// 		token: 'keymBy1TajObCCmUW'
// 	}).then(result => {
// 		this.props.updateData();
//
// 		this.setState({
// 			song: {
// 				melody: [
// 					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// 				],
// 				info: { title: 'Untitled', description: 'New Song' },
// 				id: null
// 			}
// 		});
// 	});
// };

// subscribe to store
// componentWillReceiveProps(nextProps) {
// 	if (nextProps.song !== {}) {
// 		this.setState({
// 			song: nextProps.song
// 		});
// 	}
// }

// replace with wrapped onMount function
// componentDidMount() {
// 	this.setState({
// 		song: this.props.song
// 	});
// }
