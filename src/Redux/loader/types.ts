export const SET_LOADING = Symbol('SET_LOADING');
export const CLEAR_LOADING = Symbol('CLEAR_LOADING');

export interface LoadingState {
	loading: boolean;
}

interface SetLoadingAction {
	type: typeof SET_LOADING;
}

interface ClearLoadingAction {
	type: typeof CLEAR_LOADING;
}

export type LoadingActionTypes = SetLoadingAction | ClearLoadingAction;
