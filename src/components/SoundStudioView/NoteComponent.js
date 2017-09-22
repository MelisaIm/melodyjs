import React, { PureComponent } from 'react';
import classNames from 'classnames';

export default class NoteComponent extends PureComponent {
	render() {
		const { selected, name, id } = this.props;
		const noteClassNames = classNames('note', { selected });
		return (
			<div className={noteClassNames} onClick={this._handleClick} name={name} id={id}>
				<span className="noteSpan">
					{name}
				</span>
			</div>
		);
	}

	_handleClick = event => {
		event.preventDefault();
		const { onSelect } = this.props;
		const note = event.target.attributes.name.value;
		const column = parseInt(event.target.attributes.id.value.split(',')[0], 10);
		const row = parseInt(event.target.attributes.id.value.split(',')[1], 10);
		onSelect({ note, column, row });
	};
}
