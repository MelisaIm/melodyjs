import React, { PureComponent } from 'react';
import classNames from 'classnames';
import NoteComponent from './NoteComponent';

export default class NotesComponent extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			rows: this.props.song
		};
	}

	onSelect = ({ note, column, row }) => {
		console.log(note, column, row);
		if (this.state.rows[row][column] !== 0) {
			this.setState(prevState => {
				let changedRow = prevState.rows[row].slice();
				changedRow.splice(column, 1, 0);
				let newState = prevState.rows.slice();
				newState.splice(row, 1, changedRow);
				return { rows: newState };
			});
		} else {
			this.setState(prevState => {
				let changedRow = prevState.rows[row].slice();
				changedRow.splice(column, 1, note);
				let newState = prevState.rows.slice();
				newState.splice(row, 1, changedRow);
				return { rows: newState };
			});
		}
	};

	componentWillReceiveProps(nextProps) {
		this.setState({
			rows: nextProps.song
		});
	}

	render() {
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
											selected={this.state.rows[row][chord] ? true : false}
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
						return (
							<div className="notes-column" key={chord}>
								{this.props.notes.map((note, row) => {
									return (
										<NoteComponent
											key={(chord, row)}
											name={note}
											onSelect={this.onSelect}
											id={`${chord},${row}`}
											selected={this.state.rows[row][chord] ? true : false}
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
