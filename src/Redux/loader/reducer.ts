import * as types from './types';

const initialState: types.LoadingState = {
	loading: false,
};

const loaderReducer = (
	state = initialState,
	action: types.LoadingActionTypes
) => {
	switch (action.type) {
		case types.SET_LOADING:
			return {
				...state,
				loading: true,
			};
		case types.CLEAR_LOADING:
			return {
				...state,
				loading: false,
			};
		default:
			return state;
	}
};

export default loaderReducer;
