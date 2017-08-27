import { ADD_LINK, SEND_TO_PAGE } from "../actions/index";

const initialState = {
	memoryLink: "",
	buttonShow: false,
};

function links(state = initialState, action) {
	switch (action.type) {
		case ADD_LINK:
			return Object.assign({}, state, {
				memoryLink: action.link,
				buttonShow: true,
			})
		case SEND_TO_PAGE:
			return Object.assign({}, state, {
				memoryLink: "",
				buttonShow: false,
			})
		default:
			return state
	}
}

export default links;