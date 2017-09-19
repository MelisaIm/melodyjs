import React, { Component } from 'react';
import './App.css';
import SoundStudioPage from './components/SoundStudioView/SoundStudioPage';

class App extends Component {
	render() {
		return (
			<div className="App">
				<SoundStudioPage
					notes={['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']}
					onSelect={this.onSelect}
					instruments={['Synth']}
					onReplay={this.onReplay}
					onClear={this.onClear}
					onSave={this.onSave}
					onDelete={this.onDelete}
					chooseInstrument={this.chooseInstrument}
				/>
			</div>
		);
	}
}

export default App;
