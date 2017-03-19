import { CLEAR_ERROR } from '../actions/actionTypes';

const error = (state = null, action) => {
	const { type, error } = action
	if (type === CLEAR_ERROR) {
		return null;
	} else if (error) {
		return action.error
	}
	return state;
}

export default error;