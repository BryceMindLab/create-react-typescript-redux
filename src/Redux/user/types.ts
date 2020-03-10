export const SET_CURRENT_USER = Symbol('SET_CURRENT_USER');

export interface UserState {
	currentUser: string | null;
}

interface SetCurrentUserAction {
	type: typeof SET_CURRENT_USER;
	value: string | null;
}

export type UserActionTypes = SetCurrentUserAction;
