import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class Form extends Component {
	static defaultProps = {
		info: { title: '', description: '' }
	};

	constructor(props) {
		super(props);
		this.state = {
			title: '',
			description: ''
		};
	}

	render() {
		return (
			<form className="Form">
				<FormGroup className="form" controlId="formControlsTextarea">
					<ControlLabel>Title</ControlLabel>
					<FormControl
						className="Form-titleInput"
						name="titleInput"
						type="text"
						value={this.state.title || ''}
						placeholder="Give your song a title"
						onChange={this._handleChangeInput}
						required
					/>
					<ControlLabel>Description</ControlLabel>
					<FormControl
						componentClass="textarea"
						className="Form-bodyInput"
						name="descriptionInput"
						placeholder="Type your description here..."
						value={this.state.description || ''}
						onChange={this._handleChangeInput}
						required
					/>
				</FormGroup>
			</form>
		);
	}

	_handleChangeInput = event => {
		event.preventDefault();
		const $input = event.target;
		const inputName = $input.name.replace('Input', '');
		this.setState({ [inputName]: $input.value });
		this.props.onEditForm({ [inputName]: $input.value });
	};

	// componentWillReceiveProps(nextProps) {
	// 	if (nextProps.songId) {
	// 		const selectedSong = this.props.data.find(song => song.id === nextProps.songId);
	// 		this.setState({
	// 			title: selectedSong.info.title,
	// 			description: selectedSong.info.description
	// 		});
	// 	}
	// }
}
