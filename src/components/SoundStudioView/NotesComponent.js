import React, { PureComponent } from 'react';
import classNames from 'classnames';
import NoteComponent from './NoteComponent';
import Tone from 'tone';

export default class NotesComponent extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			song: {
				melody: [
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
				],
				info: { title: '', description: '' }
			},
			songId: null
		};
	}

	synth(note) {
		let synth = new Tone.Synth().toMaster();
		synth.triggerAttackRelease(note, '16n');
	}

	onSelect = ({ note, column, row }) => {
		this.synth(note);
		if (this.state.song.melody[row][column] !== 0) {
			this.setState(prevState => {
				let changedRow = prevState.song.melody[row].slice();
				changedRow.splice(column, 1, 0);
				let newState = prevState.song.melody.slice();
				newState.splice(row, 1, changedRow);
				this.props.updateSong(newState);
				return { melody: newState };
			});
		} else {
			this.setState(prevState => {
				let changedRow = prevState.song.melody[row].slice();
				changedRow.splice(column, 1, note);
				let newState = prevState.song.melody.slice();
				newState.splice(row, 1, changedRow);
				this.props.updateSong(newState);

				return { melody: newState };
			});
		}
	};

	componentDidMount() {
		const song = this.state.song;
		this.setState({
			song
		});
	}

	componentWillReceiveProps = nextProps => {
		if (nextProps.song !== {}) {
			let song = nextProps.song;
			this.setState({
				song
			});
		}
	};

	render() {
		if (!this.state.song) {
			const chords = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
			const notesClassNames = classNames('notesComponent');
			return (
				<div className={notesClassNames}>
					{chords.map(chord => {
						return (
							<div className="notes-column" key={chord}>
								{this.props.notes.map((note, row) => {
									return (
										<NoteComponent
											key={(chord, row)}
											name={note}
											onSelect={this.onSelect}
											id={`${chord},${row}`}
											selected={false}
										/>
									);
								})}
							</div>
						);
					})}
				</div>
			);
		} else {
			const chords = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
			const notesClassNames = classNames('notesComponent');
			return (
				<div className={notesClassNames}>
					{chords.map(chord => {
						const chordClassNames = classNames('notes-column', {
							playing: this.props.playingChord === chord
						});
						return (
							<div className={chordClassNames} key={chord}>
								{this.props.notes.map((note, row) => {
									return (
										<NoteComponent
											key={(chord, row)}
											name={note}
											onSelect={this.onSelect}
											id={`${chord},${row}`}
											selected={this.state.song.melody ? this.state.song.melody[row][chord] : false}
										/>
									);
								})}
							</div>
						);
					})}
				</div>
			);
		}
	}
}
