import fetch from "isomorphic-fetch";

export const ADD_LINK = "ADD_LINK";
export function addLink(link) {
	return {
		type: ADD_LINK,
		link,
	};
}

export const SEND_TO_PAGE = "SEND_TO_PAGE";
export function sendToPage() {
	return {
		type: SEND_TO_PAGE,
	};
}

export const REQUEST_WAIT = "REQUEST_WAIT";
function requestWait(subreddit) {
	return {
		type: REQUEST_WAIT,
		subreddit
	};
}

export const RECEIVE_GET = "RECEIVE_GET";
function receiveGet(json) {
	return {
		type: RECEIVE_GET,
		posts: json
	};
}

export function fetchDataGet(subreddit) {
	return function (dispatch) {
		dispatch(requestWait(subreddit));
		return fetch(`/api/${subreddit}`)
			.then(response => response.json(),
				error => console.error("An error occured.", error))
			.then(json => dispatch(receiveGet(json)));
	};
}

export const RECEIVE_POST = "RECEIVE_POST";
function receivePost(item) {
	return {
		type: RECEIVE_POST,
		item
	};
}

export function fetchDataPost(subreddit, item, waiting = true) {
	return function (dispatch) {
		waiting && dispatch(requestWait(subreddit));
		return fetch(
			`/api/${subreddit}`,
			{
				method: "POST",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify(item)
			})
			.then(resp => resp.json())
			.then(() => {
				if (subreddit === "add") {
					return dispatch(sendToPage());
				} else {
					return dispatch(receivePost(item));
				}
			});
	};
}
