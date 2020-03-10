import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import persistState from 'redux-localstorage';
import rootReducer from '../Reducers';
import history from '../../Lib/Utils/history';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
	rootReducer,
	composeEnhancers(
		applyMiddleware(routerMiddleware(history), thunk),
		persistState([], {
			key: 'store',
			slicer: (paths) => (state) => ({
				user: {
					currentUser: state.user.currentUser,
				},
			}),
		})
	)
);
