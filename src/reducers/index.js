import {
	ADD_LINK,
	EMPTY_INPUT,
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
	case EMPTY_INPUT:
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
	console.log(action)
		let _state = state.data.filter(item => item.url !== action.item.url);
		return Object.assign({}, state, {
			data: _state,
			isFetching: false,
		});
	default:
		return state;
	}
}

export default links;
