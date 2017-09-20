import React, { PureComponent } from 'react';
import classNames from 'classnames';
import NoteComponent from './NoteComponent';
import Tone from 'tone';

export default class NotesComponent extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			rows: [
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
		};
	}

	synth(note) {
		let synth = new Tone.Synth().toMaster();
		synth.triggerAttackRelease(note, '16n');
	}

	onSelect = ({ note, column, row }) => {
		this.synth(note);
		if (this.state.rows[row][column] !== 0) {
			this.setState(prevState => {
				let changedRow = prevState.rows[row].slice();
				changedRow.splice(column, 1, 0);
				let newState = prevState.rows.slice();
				newState.splice(row, 1, changedRow);
				this.props.updateSong(newState);
				return { rows: newState };
			});
		} else {
			this.setState(prevState => {
				let changedRow = prevState.rows[row].slice();
				changedRow.splice(column, 1, note);
				let newState = prevState.rows.slice();
				newState.splice(row, 1, changedRow);
				this.props.updateSong(newState);

				return { rows: newState };
			});
		}
	};

	componentDidMount() {
		console.log(this.props.song);
		if (this.props.song) {
			this.setState({
				rows: this.props.song
			});
		}
	}

	componentWillReceiveProps = nextProps => {
		this.setState({
			rows: nextProps.song
		});
	};

	render() {
		console.log(this.state);
		if (!this.props.song) {
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
			console.log(this.state);
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
											selected={this.state.rows[row][chord]}
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
