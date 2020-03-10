import * as userService from '../../Services/Api/userService';
import { actions } from './alert';
import { ClientError } from '../../Lib/Utils/exceptions';
import { tap } from '../../Lib/Utils/lang';
import { setToken } from '../../Lib/Utils/auth';
import { setCurrentUser, setLoadingAction } from './globalActions';

// FIXME: Use Sagas here

export const doLogin = (email, password) => (dispatch) => {
	dispatch(setLoadingAction(true));
	return tap(
		userService.login(email, password),
		(response) => {
			dispatch(setCurrentUser(response.data.user));
			dispatch(setLoadingAction(false));
			setToken(response.data.jwtToken);
		},
		(error) => {
			dispatch(setLoadingAction(false));
			const _message = 'The user or password was incorrect!, please try again.';
			const message =
				error instanceof ClientError ? _message : 'Internal Error';
			dispatch(alertActions.error(message));
		}
	);
};
