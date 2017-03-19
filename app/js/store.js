import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import combineReducers from './reducers/reducers';


const logger = createLogger();


const store = createStore(
	combineReducers, 
	applyMiddleware(
		thunk,
		logger
	)
);

export default store;
