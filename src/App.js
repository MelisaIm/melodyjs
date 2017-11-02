import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import IndexPage from './components/IndexView/IndexPage';
import NotFoundPage from './components/NotFoundPage';
import getSongsProcess from './redux/thunks/getSongsProcess';
import LibraryPageContainer from './redux/containers/LibraryPageContainer';
import SoundStudioPageContainer from './redux/containers/SoundStudioPageContainer';
import LoginPageContainer from './redux/containers/LoginPageContainer';
import SignupPageContainer from './redux/containers/SignupPageContainer';
import setupStore from './redux/setupStore';

export default class App extends Component {
	// constructor(props) {
	// 	super(props);
	//
	// 	this.state = {
	// 		data: [],
	// 		song: {
	// 			melody: [
	// 				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	// 			],
	// 			info: { title: '', description: '' }
	// 		}
	// 	};
	//
	// 	this.props.store.subscribe(() => {
	// 		this.setState(this.props.store.getState());
	// 	});
	// }
	componentDidMount() {
		getSongsProcess();
	}

	updateData = () => {
		getSongsProcess();
	};

	render() {
		function getInitialState(authentication) {
			console.log(authentication);
			return Object.keys(authentication).length !== 0
				? Object.assign(
						{},
						{
							token: authentication.token,
							authenticatedUserId: authentication.user.id,
							user: authentication.user
						}
					)
				: {};
		}
		return (
			<div className="App">
				<Provider store={setupStore(getInitialState(this.props.authentication))}>
					<Router>
						<Switch>
							<Route
								exact
								path="/register"
								render={() => {
									return <SignupPageContainer />;
								}}
							/>
							<Route
								exact
								path="/login"
								render={() => {
									return <LoginPageContainer />;
								}}
							/>
							<Route exact path="/" component={IndexPage} />
							<Route
								exact
								path="/studio"
								render={() => {
									return <SoundStudioPageContainer songId={null} />;
								}}
							/>
							<Route
								exact
								path="/library"
								render={() => {
									return <LibraryPageContainer />;
								}}
							/>

							<Route
								exact
								path="/studio/:songId"
								render={({ match }) => {
									const id = match.params.songId;
									return <SoundStudioPageContainer songId={id} />;
								}}
							/>
							<Route component={NotFoundPage} />
						</Switch>
					</Router>
				</Provider>
			</div>
		);
	}
}
