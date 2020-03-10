export const SHOW_MODAL = Symbol('SHOW_MODAL');
export const HIDE_MODAL = Symbol('HIDE_MODAL');
export const CLEAN_MODAL = Symbol('CLEAN_MODAL');

export interface ModalState {
	props: {
		isOpen: boolean;
		className: string;
	};
	body: string | null;
	headerText: string;
	footer: string | null;
}

// TODO: "any" type
interface ShowModalAction {
	type: typeof SHOW_MODAL;
	value: any;
}

interface HideModalAction {
	type: typeof HIDE_MODAL;
}

interface CleanModalAction {
	type: typeof CLEAN_MODAL;
}

export type ModalActionTypes =
	| ShowModalAction
	| HideModalAction
	| CleanModalAction;
