import * as types from './types';

const initialState = {
	currentUser: null,
};

const user = (state = initialState, action: types.UserActionTypes) => {
	switch (action.type) {
		case types.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.value,
			};

		default:
			return state;
	}
};

export default user;
