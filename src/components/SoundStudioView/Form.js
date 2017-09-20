import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class Form extends Component {
	static defaultProps = {
		info: {},
		onSaveForm: () => {},
		onDelete: () => {}
	};

	constructor(props) {
		super(props);
		const { info } = this.props;
		this.state = {
			title: '',
			description: ''
		};
	}

	render() {
		return (
			<form className="Form" onSubmit={this._handleSubmit}>
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
		this.setState({
			[inputName]: $input.value
		});
	};

	_handleClickDeleteButton = event => {
		event.preventDefault();
		const { onDelete } = this.props;
		onDelete({});
	};

	componentWillReceiveProps(nextProps) {
		console.log(nextProps.songId);
		if (nextProps.songId) {
			this.setState({
				title: nextProps.info.title,
				description: nextProps.info.description
			});
		} else {
			this.setState({
				title: '',
				description: ''
			});
		}
	}
}
