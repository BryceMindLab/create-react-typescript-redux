import * as types from './types';

const initialState: types.ModalState = {
	props: {
		isOpen: false,
		className: 'modal-lg',
	},
	body: null,
	headerText: '',
	footer: null,
};

const modalReducer = (state = initialState, action: types.ModalActionTypes) => {
	switch (action.type) {
		case types.SHOW_MODAL: {
			const { value } = action;
			return {
				...state,
				props: {
					...state.props,
					isOpen: true,
					className: value && value.className,
				},
				headerText: value && value.headerText,
				body: value && value.body,
				footer: value && value.footer,
			};
		}
		case types.HIDE_MODAL: {
			return {
				...state,
				props: {
					...state.props,
					isOpen: false,
				},
			};
		}
		case types.CLEAN_MODAL: {
			return {
				...initialState,
				props: {
					...initialState.props,
				},
			};
		}
		default:
			return state;
	}
};

export default modalReducer;
