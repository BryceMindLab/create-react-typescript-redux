import * as types from './types';

const success = (
	message = 'The operation was successful'
): types.AlertActionTypes => ({
	type: types.ALERT_SUCCESS,
	message,
});

const error = (
	message = 'There was an error, please try again.'
): types.AlertActionTypes => ({
	type: types.ALERT_ERROR,
	message,
});

const clear = (): types.AlertActionTypes => ({ type: types.ALERT_CLEAR });

export default {
	success,
	error,
	clear,
};
