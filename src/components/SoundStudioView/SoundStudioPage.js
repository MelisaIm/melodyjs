import React, { PureComponent } from 'react';
import SoundStudioPageLayout from './SoundStudioPageLayout';
import getSong from '../../requests/getSong';

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
		getSong(id, {
			databaseId: 'appxhHjmck1PuVaSU',
			token: 'keymBy1TajObCCmUW'
		}).then(song => {
			this.setState({ song: song.rows });
		});
	};

	componentWillReceiveProps(nextProps) {
		this.setState({
			song: nextProps.song
		});
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
					onSave={this.props.onSave}
					onDelete={this.props.onDelete}
					chooseInstrument={this.chooseInstrument}
					updateSong={this.updateSong}
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
