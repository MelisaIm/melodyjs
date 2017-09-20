import React, { Component } from 'react';
import SoundStudioPage from './components/SoundStudioView/SoundStudioPage';
import IndexPage from './components/IndexView/IndexPage';
import LibraryPage from './components/LibraryView/LibraryPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';
import data from './data';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Switch>
						<Route exact path="/" component={IndexPage} />
						<Route
							exact
							path="/studio"
							render={() => {
								return (
									<SoundStudioPage
										notes={[
											'C5',
											'D4',
											'E4',
											'F4',
											'G4',
											'A4',
											'B4',
											'C4',
											'D3',
											'E3',
											'F3',
											'G3',
											'A3',
											'B3',
											'C3'
										]}
										onSelect={this.onSelect}
										instruments={['Synth']}
										onReplay={this.onReplay}
										onClear={this.onClear}
										onSave={this.onSave}
										onDelete={this.onDelete}
										chooseInstrument={this.chooseInstrument}
									/>
								);
							}}
						/>
						<Route
							exact
							path="/library"
							render={() => {
								return <LibraryPage songs={data} />;
							}}
						/>
						<Route
							exact
							path="/studio/:songId"
							render={({ match }) => {
								const id = parseInt(match.params.songId, 10);
								return (
									<SoundStudioPage
										song={data.find(song => song.id === id).rows}
										notes={[
											'C5',
											'D4',
											'E4',
											'F4',
											'G4',
											'A4',
											'B4',
											'C4',
											'D3',
											'E3',
											'F3',
											'G3',
											'A3',
											'B3',
											'C3'
										]}
										onSelect={this.onSelect}
										instruments={['Synth']}
										onReplay={this.onReplay}
										onClear={this.onClear}
										onSave={this.onSave}
										onDelete={this.onDelete}
										chooseInstrument={this.chooseInstrument}
									/>
								);
							}}
						/>
						<Route component={NotFoundPage} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
