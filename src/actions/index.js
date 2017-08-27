export const ADD_LINK = "ADD_LINK"
export const SEND_TO_PAGE = "SEND_TO_PAGE"

export function addLink(link) {
	return {
		type: ADD_LINK,
		link,
	}
}

export function sendToPage() {
	return {
		type: SEND_TO_PAGE,
	}
}
