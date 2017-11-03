import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';
import env from '../env';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(thunkMiddleware.withExtraArgument(env)));
export default function setupStore(initalState) {
	return createStore(rootReducer, initalState, enhancers);
}
