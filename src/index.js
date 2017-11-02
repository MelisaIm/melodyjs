import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import env from './env';
import checkAuthentication from './helperFunctions/checkAuthentication';
import setupStore from './redux/setupStore';

// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();

async function render() {
	const authentication = await checkAuthentication({
		baseUrl: env.API_BASE_URL
	});

	function getInitialState(authentication) {
		return authentication
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

	const store = setupStore(getInitialState(authentication));

	ReactDOM.render(<App store={store} />, document.getElementById('root'));
}

render();
