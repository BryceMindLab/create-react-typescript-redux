import * as types from './types';

export const setLoading = (): types.LoadingActionTypes => ({
	type: types.SET_LOADING,
});

export const clearLoading = (): types.LoadingActionTypes => ({
	type: types.SET_LOADING,
});
