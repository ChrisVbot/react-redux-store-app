import { combineReducers } from 'redux';
import { profile, name } from './name';
import product from './product';
import error from './error';
import reviewsByProductID from './review';

export default combineReducers({
	name: name,
	error: error,
	profile: profile,
	product: product,
	reviewsByProductID: reviewsByProductID
});