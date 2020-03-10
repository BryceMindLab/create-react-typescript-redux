export const ALERT_SUCCESS = Symbol('ALERT_SUCCESS');
export const ALERT_ERROR = Symbol('ALERT_ERROR');
export const ALERT_CLEAR = Symbol('ALERT_CLEAR');

interface AlertSuccessAction {
	type: typeof ALERT_SUCCESS;
	message: string;
}

interface AlertErrorAction {
	type: typeof ALERT_ERROR;
	message: string;
}

interface AlertClearAction {
	type: typeof ALERT_CLEAR;
}

export type AlertActionTypes =
	| AlertSuccessAction
	| AlertErrorAction
	| AlertClearAction;
