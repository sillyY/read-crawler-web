/// <reference path="../typings/store.d.ts" />
import * as actions from "../actionTypes/index"
export default (
	state = {
		toast: {
			visible: false,
			content: ""
		},
		pwdModal: {
			visible: false
		},
		update: {
			showUpdateModal: false,
			info: {}
		},
		downloadProgress: 0,
		device: {
			visible: false
		},
		showRedDot: false
	},
	{ type, payload }: Store.IAction
) => {
	switch (type) {
		case actions.SET_TOAST:
			return {
				...state,
				toast: payload
			}
		default:
			return state
	}
}
