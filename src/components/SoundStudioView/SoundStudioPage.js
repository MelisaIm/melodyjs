import React, { PureComponent } from 'react';
import SoundStudioPageLayout from './SoundStudioPageLayout';
import getSong from '../../requests/getSong';
import updateSong from '../../requests/updateSong';
import songToRecord from '../../requests/utils/songToRecord';
import createSong from '../../requests/createSong';

export default class SoundStudioPage extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			song: null
		};
	}

	updateSong = newSong => {
		this.setState({
			song: newSong
		});
	};

	chooseInstrument = instrument => {
		console.log(instrument);
	};

	onClear = id => {
		if (id) {
			getSong(id, {
				databaseId: 'appxhHjmck1PuVaSU',
				token: 'keymBy1TajObCCmUW'
			}).then(song => {
				this.setState({ song });
			});
		} else {
			this.setState({
				song: [
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
				]
			});
		}
	};

	onSave = (song, id) => {
		if (id) {
			const update = songToRecord(song);
			updateSong(id, update, {
				databaseId: 'appxhHjmck1PuVaSU',
				token: 'keymBy1TajObCCmUW'
			}).then(song => {
				this.props.updateData(song, id);
				this.setState({ song });
			});
		} else {
			console.log('create a song instead');
		}
	};

	onSaveForm = ({ info }, id) => {
		if (id) {
			console.log('song exists!');
		} else {
			console.log('create a new song, yo');
		}
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.song) {
			this.setState({
				song: nextProps.song
			});
		}
	}

	componentDidMount() {
		this.setState({
			song: this.props.song
		});
	}

	render() {
		return (
			<div className="SoundStudioPage">
				<SoundStudioPageLayout
					songId={this.props.songId}
					song={this.state.song}
					notes={this.props.notes}
					instruments={this.props.instruments}
					onReplay={this.props.onReplay}
					onClear={this.onClear}
					onSave={this.onSave}
					onDelete={this.props.onDelete}
					chooseInstrument={this.chooseInstrument}
					updateSong={this.updateSong}
					data={this.props.data}
					onSaveForm={this.onSaveForm}
				/>
			</div>
		);
	}
}

// [
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// ]
