import {
	ADD_LINK,
	SEND_TO_PAGE,
	RECEIVE_GET,
	REQUEST_WAIT,
	RECEIVE_POST,
} from "../actions/index";

const initialState = {
	memoryLink: "",
	buttonShow: false,
	isFetching: true,
	data: [],
};

function links(state = initialState, action) {
	switch (action.type) {
	case ADD_LINK:
		return Object.assign({}, state, {
			memoryLink: action.link,
			buttonShow: true,
		});
	case SEND_TO_PAGE:
		return Object.assign({}, state, {
			memoryLink: "",
			buttonShow: false,
		});
	case REQUEST_WAIT:
		return Object.assign({}, state, {
			isFetching: true,
		});
	case RECEIVE_GET:
		return Object.assign({}, state, {
			isFetching: false,
			data: action.posts,
		});
	case RECEIVE_POST:
		let _state = state.data;
		_state.splice(_state.indexOf(action.item), 1);
		return Object.assign({}, state, {
			data: _state,
			isFetching: false,
		});
	default:
		return state;
	}
}

export default links;