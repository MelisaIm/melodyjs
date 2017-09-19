import React, { PureComponent } from 'react';
import classNames from 'classnames';
import NoteComponent from './NoteComponent';

export default class NotesComponent extends PureComponent {
	state = {
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
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		]
	};

	onSelect = ({ note, column, row }) => {
		this.setState(prevState => {
			let changedRow = prevState.rows[row].slice();
			changedRow.splice(column, 1, note);
			let newState = prevState.rows.slice();
			newState.splice(row, 1, changedRow);
			return { rows: newState };
		});
	};

	// onDeselect = ({note,column, row}) => {
	//
	// }

	render() {
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
