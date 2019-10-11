/// <reference path="../typings/store.d.ts" />
import * as actions from "../actionTypes/index"
export default (
	state = {
		loading: {
			visible: false,
			tip: ""
		}
	},
	{ type, payload }: Store.IAction
) => {
	switch (type) {
		case actions.SET_LOADING:
			return {
				...state,
				loading: payload
			}
		default:
			return state
	}
}
