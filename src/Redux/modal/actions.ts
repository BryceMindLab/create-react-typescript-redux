import * as types from './types';

// TODO: any type
const showModalAction = (value: any): types.ModalActionTypes => ({
	type: types.SHOW_MODAL,
	value,
});

const hideModalAction = (): types.ModalActionTypes => ({
	type: types.HIDE_MODAL,
});

const cleanModalAction = (): types.ModalActionTypes => ({
	type: types.CLEAN_MODAL,
});

export const doShowModal = (modalProps) => (dispatch) => {
	dispatch(showModalAction(modalProps));
};

export const doCloseModal = () => (dispatch) => {
	dispatch(hideModalAction());
};

export const cleanModalForm = () => (dispatch) => {
	dispatch(cleanModalAction());
};
