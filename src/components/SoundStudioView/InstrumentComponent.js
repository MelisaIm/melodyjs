import React from 'react';

export default function InstrumentComponent({ chooseInstrument, name }) {
	function _handleClick(event) {
		event.preventDefault();
		chooseInstrument(event.target.attributes.name.value);
	}

	return (
		<div className="InstrumentComponent">
			<button name={name} onClick={_handleClick}>
				{name.toUpperCase()}
			</button>
		</div>
	);
}
