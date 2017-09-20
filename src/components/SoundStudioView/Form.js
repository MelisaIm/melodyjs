import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class Form extends Component {
	static defaultProps = {
		info: {},
		onSave: () => {},
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
						type="text"
						value={this.state.title || ''}
						placeholder="Give your song a title"
						onChange={this._handleChangeInput}
					/>
					<ControlLabel>Description</ControlLabel>
					<FormControl
						componentClass="textarea"
						className="Form-bodyInput"
						name="descriptionInput"
						placeholder="Type your description here..."
						value={this.state.description || ''}
						onChange={this._handleChangeInput}
					/>
					<div className="Form-saveButtonWrapper">
						<button className="Form-saveButton btn btn-primary" type="submit">
							Save
						</button>
						{this.state.songId &&
							<button className="Form-deleteButton" onClick={this._handleClickDeleteButton}>
								Delete
							</button>}
					</div>
				</FormGroup>
			</form>
		);
	}

	_handleSubmit = event => {
		event.preventDefault();
		const { onSave } = this.props;
		const $form = event.target;
		const title = $form.titleInput.value.trim();
		const description = $form.descriptionInput.value.trim();
		$form.reset();
		onSave({ title, description });
	};

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
		if (nextProps.info) {
			this.setState({
				title: nextProps.info.title,
				description: nextProps.info.description
			});
		}
	}
}
