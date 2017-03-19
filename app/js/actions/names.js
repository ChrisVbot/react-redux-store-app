import { fetchNames, addAnotherName } from '../fake-backend';
import {
	REQUEST_NAMES,
	RECEIVE_NAMES,
	RECEIVE_NAMES_ERROR,
	REQUEST_PROFILE,
	RECEIVE_PROFILE,
	RECEIVE_PROFILE_ERROR,
	ADD_NAME_REQUEST,
	ADD_NAME_SUCCESS,
	FILTER_NAMES,
	DELETE_NAME,
	CLEAR_ERROR
	} from './actionTypes'

// Action Creators
const requestNames = () => {
	return {
		type: REQUEST_NAMES
	}
}

const receiveNames = (names) => {
	return {
		type: RECEIVE_NAMES,
		names: names
	}
}

const receiveNamesError = (error) => {
	return {
		type: RECEIVE_NAMES_ERROR,
		error: error
	}
}

const clearError = () => {
	return {
		type: CLEAR_ERROR
	}
}

//Thunk action creator
const fetchNameList = () => {
	return (dispatch, getState) => {
		//First dispatch - the app is updated to show
		//it is fetching data
		dispatch(requestNames())
		if (getState().error) {
			dispatch(clearError())
		}
		//The function called by Thunk can return a value
		//In this case, we return a promise to wait for
		return fetchNames({method:'GET'}).then(
			names => {
				dispatch(receiveNames(names))

			},
			error => {
				dispatch(receiveNamesError(error.message))
			}

		)
	}
}

const shouldFetchNameList = (state) => {
	const {names} = state.name;
	if (!names.length) {
		return true;
	} else {
		return false;
	}
}

export const fetchNameListIfNeeded = () => {
	//The Thunk function receives getState() along with dispatch
	//This can be used to avoid extra network requests
	return (dispatch, getState) => {
		if (shouldFetchNameList(getState())) {
			return dispatch(fetchNameList())
		} else {
			//Let calling code know there's nothing to wait for
			return Promise.resolve()
		}
	}
}

const requestProfile = () => {
	return {
		type: REQUEST_PROFILE
	}
}

const receiveProfile = (profile) => {
	return {
		type: RECEIVE_PROFILE,
		profile: profile
	}
}

const receiveProfileError = (error) => {
	return {
		type: RECEIVE_PROFILE_ERROR,
		error: error
	}
}

const fetchProfile = (id) => {
	return (dispatch, getState) => {
		dispatch(requestProfile())
		if (getState().error) {
			dispatch(clearError())
		}
		return fetchNames({method: 'FIND', id: id}).then(
			profile => {
				dispatch(receiveProfile(profile))
			},
			error => {
				dispatch(receiveProfileError(error.message))
			}
		)
	}
}

const shouldFetchProfile = (state, currentID) => {
	const { id } = state.profile.profile;
	if (id !== currentID) {
		return true;
	} else {
		return false;
	}
}

export const fetchProfileIfNeeded = (id) => {
	return (dispatch, getState) => {
		if (shouldFetchProfile(getState(), id)) {
			return dispatch(fetchProfile(id));
		} else {
			return Promise.resolve();
		}
	}
}

const addNameRequest = () => {
	return {
		type: ADD_NAME_REQUEST
	}
}

const addNameSuccess = (name) => {
	return {
		type: ADD_NAME_SUCCESS,
		name: name
	}
}

export const canAddName = (name) => {
	return (dispatch) => {
		dispatch(addNameRequest())
		return addAnotherName(name)
			.then(response => dispatch(addNameSuccess(response)))
	}
}

export const filterNames = (text) => {
	return {
		type: FILTER_NAMES,
		text: text
	}
}

export const deleteName = (id) => {
	return {
		type: DELETE_NAME,
		id: id
	}
}
